import React, { useEffect, useState } from 'react';
import * as S from "./style"
import Logo from "../../../assets/Logo.svg"
import {EXPLAIN, HOWTOPLAYCONTENT} from "./txt"
import { CloseCircleOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const GameFoodStart = () => {
    const [isHowToPlay, setIsHowToPlay] = useState(false)
    const gameNum = useLocation().state | 0
    const gameNameList = ["continue","flag","people","food"]

    return (
        <S.GameStartLayout>
            <S.PreviewImg src={Logo} />
            <S.Explain>{EXPLAIN[gameNum]}</S.Explain>

            <S.BtnRow>
                <S.RuleBtn
                    onClick={()=>{
                        setIsHowToPlay(true)
                    }}
                >HOW TO PLAY</S.RuleBtn>
                <S.StartLink to={`/game/${gameNameList[gameNum]}`}>START</S.StartLink>
            </S.BtnRow>

            {
                isHowToPlay && 
                <S.HowToPlayModal>
                    게임 방법
                    <CloseCircleOutlined 
                        style={{
                            position:'absolute',
                            top:50,
                            right:50,
                            fontSize:"3vw",
                            color:"#878889",
                        }}
                        onClick={()=>{
                            setIsHowToPlay(false)
                        }}
                    />
                    <S.ModalDevideLine/>
                    <S.ModalContentTxt>{HOWTOPLAYCONTENT}</S.ModalContentTxt>
                </S.HowToPlayModal>
            }

        </S.GameStartLayout>
    );
};

export default GameFoodStart;