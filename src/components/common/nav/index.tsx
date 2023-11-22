import React from 'react';
import Logo from "../../../assets/Logo.svg"
import * as S from "./style"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigator = useNavigate()
    return (
        <S.NavLayout>
            <S.LogoStyled 
                src={Logo}
                onClick={()=>{
                    navigator('/')
                }}    
            />
        </S.NavLayout>
    );
};

export default Nav;