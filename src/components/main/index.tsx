import React from 'react';
import * as S from './style';
import Pic1 from "../../assets/MainPic.svg"
import {DESIGN,GAMEINTROTITLE,GAMEINTROTXT,GAMELINK} from "./txt"
import CorrectSign from '../common/correctSign';

const Main = () => {
    return (
        <S.MainLayout>
        <S.DesignTxtBox>{DESIGN}</S.DesignTxtBox>
        <S.LowRow>
            <S.GameLink to='/game/choose'>
                {GAMELINK}
                <S.Arrow xmlns="http://www.w3.org/2000/svg" width="36" height="58" viewBox="0 0 36 58" fill="none">
                    <rect x="7.07117" y="57.071" width="10" height="40" transform="rotate(-135 7.07117 57.071)" fill="#030202"/>
                    <rect x="35.3553" y="28.2842" width="10" height="40" transform="rotate(135 35.3553 28.2842)" fill="#030202"/>
                </S.Arrow>
            </S.GameLink>
            <S.LowRightCol>
                <S.mainPic1 src={Pic1}/>
                <S.GameIntroBox>
                    <S.GameIntroTitle>{GAMEINTROTITLE}</S.GameIntroTitle>
                    <S.GameIntroTxt>{GAMEINTROTXT}</S.GameIntroTxt>
                </S.GameIntroBox>
            </S.LowRightCol>
        </S.LowRow>
        </S.MainLayout>
    );
};

export default Main;