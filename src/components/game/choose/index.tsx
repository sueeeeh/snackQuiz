import React from 'react';
import * as S from "./style"
import peopleQuizIcon from "../../../assets/peopleQuiz.png"
import foodQuizIcon from "../../../assets/foodQuiz.png"
import flagQuizIcon from "../../../assets/flagQuiz.png"
import continueQuizIcon from "../../../assets/continueQuiz.png"
import { GAMELIST, GAMEIMAGELIST } from './txt';
import { useNavigate } from 'react-router-dom';

const GameChoose = () => {
    const navigator = useNavigate()
    //const link = ['continue','flag','people','food/start']
    

    return (
        <S.GameChooseLayout>
            <S.ContentBox>
                <S.Title>Choose what you want</S.Title>

                <S.OrangeBoxRow>
                {
                    GAMELIST.map((data,idx)=>(
                        <S.OrangeBoxWrapper
                            onClick={() => {navigator(`/game/start`,{state:idx})}}
                        >
                            <S.OrangeBox>
                                <S.OrangeImg src={require(`../../../assets/${GAMEIMAGELIST[idx]}.png`)}/>
                            </S.OrangeBox>
                            <S.OrangeTxt>{data}</S.OrangeTxt>
                        </S.OrangeBoxWrapper>
                    ))
                }
                </S.OrangeBoxRow>


            </S.ContentBox>
        </S.GameChooseLayout>
    );
};

export default GameChoose;