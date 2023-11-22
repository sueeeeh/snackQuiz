import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style"
//import { RESTART, SKIP, STOP } from './txt';
import STOPICON from "../../../assets/StopIcon.svg"
import SKIPICON from "../../../assets/SkipIcon.svg"
import ClockIcon from "../../../assets/ClockIcon.svg"
import CurrectNumIcon from "../../../assets/CurrectNumIcon.svg"
import CorrectSignImg from "../../../assets/CorrectSign.svg"
import TimeOverSignImg from "../../../assets/TimeOverSign.svg"
import TimeOverHomeBtn from "../../../assets/TimeOverHomeBtn.svg"
import TimeOverAgainBtn from "../../../assets/TimeOverAgainBtn.svg"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { foodAnswerList, foodNumber } from '../../../assets/foodItem/foodAnswer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { continueAnswerList, continueNumber, continueQuizList } from '../../../assets/continueItem/continueAnswer';
import { flagAnswerList, flagNumber } from '../../../assets/flagItem/flagAnswer';
import { peopleAnswerList, peopleNumber } from '../../../assets/peopleItem/peopleAnswer';

// 왠지 모르겠지만 useEffect에 stt시작 코드를 넣으면 뭔가 꼬이는 듯 -> 컴퓨터 껐켜 해야함
// https://velog.io/@bami/%ED%83%80%EC%9D%B4%EB%A8%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-with-JavaScript
const GameContinue = () => {
    // 0 : 이어말하기, 1 : 국기 맞추기, 2 : 인물 맞추기, 3 : 음식 맞추기
    const { gameName } = useParams()
    
    const quizList = continueQuizList
    let answerList:Array<string> = continueAnswerList
    const RANDOMNUMLIST = useState<Array<number>>([...Array(continueNumber)].map((v,i) => i).sort(() => Math.random() - 0.5))
    const [CurrentRandomListNum, SetCurrentRandomListNum] = useState<number>(0)
    const [CurrentQuizNum,setCurrentQuizNum] = useState<number>(0)
    const [InputWord, setInputWord] = useState<string>('')
    const [IsTimerRunning, setIsTimerRunning] = useState<boolean>(false)
    const [AnswerCount, setAnswerCount] = useState(0)
    const [score, setScore] = useState<number>(0)
    const [comboCount, setComboCount] = useState<number>(0)
    const [IsCorrect, setIsCorrect] = useState<boolean>(false)
    const [IsTimeover, setIsTimeover] = useState<boolean>(false)
    // 0.01초 = 1
    const [Timer, setTimer] = useState<number>(6000)
    const TimerRef = useRef<number|null>();
    const navigator = useNavigate()

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();

    // const imgLink = `../../assets/snackItem/${CurrentQuizNum.current}.png`
    const AnswerLetterNumber = answerList[CurrentQuizNum].length;

    const onSkip = async() => {

        if(CurrentRandomListNum <= answerList.length - 1){
            SetCurrentRandomListNum((CurrentRandomListNum)=>CurrentRandomListNum+1)
            setCurrentQuizNum(RANDOMNUMLIST[0][CurrentRandomListNum])
        }

        // isEnd()
    }

    const onStopStart = () => {
        if (TimerRef.current) {
            window.clearInterval(TimerRef.current);
            TimerRef.current = null
        } else {
            TimerRef.current = window.setInterval(handleCount, 1000);  
        }

        if(listening){
            SpeechRecognition.stopListening()
        } else {
            SpeechRecognition.startListening({
                continuous: true,
                language: 'ko'
            })
        }
    }

    const onCorrect = async() => {
        setIsCorrect(true)
        setAnswerCount(AnswerCount + 1)
        setScore(()=>{
            if(comboCount >= 5){
                return score + (score*0.05) + 10
            }
            return score + 10
        })
        setComboCount(comboCount + 1)

        setTimeout(()=>{
            if(CurrentRandomListNum <= answerList.length - 1){
                SetCurrentRandomListNum((CurrentRandomListNum)=>CurrentRandomListNum+1)
                setCurrentQuizNum(RANDOMNUMLIST[0][CurrentRandomListNum])
            }
            // isEnd()

            setIsCorrect(false)
        },500)
    }

    const onContextMenuHandler = (e:any) => {
        e.preventDefault();

        onCorrect()
    }

    const onTimeover = () => {
        setIsTimeover(true)

        if (TimerRef.current) {
            window.clearInterval(TimerRef.current);
            setTimer(0);
            TimerRef.current = null;
        }

        if(listening){
            SpeechRecognition.stopListening()
        }
    }

    const handleCount = ()=>{
        setTimer((Timer) => Timer - 100)
    }

    useEffect(()=>{
        console.log(transcript)
        if(transcript.includes(answerList[CurrentQuizNum])){
            onCorrect()
        }
    },[transcript])
    
    useEffect(()=>{
        if(Timer < 0){
            onTimeover()
        }
    },[Timer])
    
    useEffect(() => {
        if(!listening){
            SpeechRecognition.startListening({
                continuous: true,
                language: 'ko'
            })
        }

        // if (TimerRef.current !== null) return;
        TimerRef.current = window.setInterval(handleCount, 1000);

        // keyDown()
        console.log(RANDOMNUMLIST)
      }, []);

    return (
        <S.GameMainLayout>
            <S.HeaderBtnBox>
                {
                    listening ? 
                    <S.HeaderBtn onClick={onStopStart}>
                        일시정지
                        <S.StopIcon src={STOPICON}/>
                    </S.HeaderBtn>
                    :
                    <S.HeaderBtn onClick={onStopStart}>
                        재시작
                        <S.RestartSvg xmlns="http://www.w3.org/2000/svg" width="38" height="44" viewBox="0 0 38 44" fill="none">
                            <path d="M38 22L0.5 43.6506V0.349365L38 22Z" fill="#030202"/>
                        </S.RestartSvg>
                    </S.HeaderBtn>
                }
                <S.HeaderBtn onClick={onSkip} onContextMenu={onContextMenuHandler}>
                    건너뛰기
                    <S.StopIcon src={SKIPICON}/>
                </S.HeaderBtn>
            </S.HeaderBtnBox>

            <S.answerBoxRow HowManyBox={4}>
            {
                [...Array(2)].map((d,idx)=>(
                    <>
                        <S.answerBox>{quizList[CurrentQuizNum][idx]}</S.answerBox>
                    </>
                ))
            }
            {
                [...Array(2)].map((d,idx)=>(
                    <>
                        <S.answerBox>
                            {IsCorrect && answerList[CurrentQuizNum][idx]}
                        </S.answerBox>
                    </>
                ))
            }
            </S.answerBoxRow>

            <S.GameInfoRow>
                <S.InfoBox>
                    <S.LeftTimeImg src={ClockIcon}/>
                    {Math.floor(Timer/6000).toString().padStart(2,'0')}:{Math.floor((Timer%6000)/100).toString().padStart(2,'0')}:{(Timer%100).toString().padStart(2,'0')}
                </S.InfoBox>
                <S.InfoBox> 
                    <S.CurrectNumImg src={CurrectNumIcon}/>
                    {AnswerCount.toString().padStart(3,'0')}/{continueNumber.toString().padStart(3,'0')}
                </S.InfoBox>
            </S.GameInfoRow>

            {
                IsCorrect &&
                <S.CorrectImg src={CorrectSignImg}/>
            }

            {
                IsTimeover &&
                <S.TimeoutImgBox>
                    <S.TimeoverImg src={TimeOverSignImg}/>
                    <S.TimeoverScoreText>{score.toFixed(2).toString().padStart(4,'0')}</S.TimeoverScoreText>
                    <S.TimeOverBtnAgain
                        src={TimeOverAgainBtn}
                        onClick={()=>{
                            window.location.reload()
                        }}
                    />
                    <S.TimeOverBtnHome 
                        src={TimeOverHomeBtn}
                        onClick={()=>{
                            navigator('/')
                        }}
                    />
                </S.TimeoutImgBox>
            }

        </S.GameMainLayout>
    );
};

export default GameContinue;