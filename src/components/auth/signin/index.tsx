import axios from 'axios';
import React, { useEffect } from 'react';

const Signin = () => {
    
    useEffect(()=>{
        axios.post('http://localhost:8080/user/login',{
            userId : "test01",
            password : "1234"
        })
        .then(()=>{
            
        })
        .catch(()=>{

        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Signin;