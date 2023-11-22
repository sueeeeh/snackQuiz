import { styled } from "styled-components";
import { WHITE_COLOR } from "../../common/colorTheme";
import {Link} from "react-router-dom"

export const GameStartLayout = styled.div`
    width: 100vw;
    min-height: calc(100vh - 9vh);

    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
`

export const PreviewImg = styled.img`
    margin-top: 7vw;

    width: 10vw;
    height: 10vw;
`

export const Explain = styled.div`
    margin-top: 3.1vh;

    color: #030202;
    font-family: Pretendard;
    font-size: 3vw;
    font-weight: 600;
`

export const BtnRow = styled.div`
    margin-top: 5vw;

    width: 100vw;

    display: flex;
    justify-content: space-around;
`

export const StartLink = styled(Link)`
    width: 36vw;
    height: 13vw;
    background-color: #FF6F00;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: #F6FCFF;
    font-family: Shrikhand;
    font-size: 5vw;
`

export const RuleBtn = styled.button`
    width: 36vw;
    height: 13vw;
    background-color: #F6FCFF;

    display: flex;
    justify-content: center;
    align-items: center;
    border: solid #FF6F00 10px;

    text-decoration: none;
    color: #FF6F00;
    font-family: Shrikhand;
    font-size: 3.5vw;
`

export const HowToPlayModal = styled.div`
    margin-top: 2vw;

    width: 40vw;
    height: 45vw;
    background-color: #F6FCFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.25));

    position: absolute; 

    color: #FF6F00;
    font-family: Shrikhand;
    font-size: 5.625rem;
    font-weight: 600;
`

export const ModalDevideLine = styled.div`
    width: 50%;
    height: 0.5vw;
    background-color: #FF6F00;
`

export const ModalContentTxt = styled.div`
    white-space: pre;
    color: #030202;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    line-height: 5vw;
`

