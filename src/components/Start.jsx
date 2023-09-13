import React from 'react';
import style from '../css/start.module.css';
import logo from "../assets/biglogo.png";
import {useNavigate } from 'react-router-dom';
const Start = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/home');
  };
    
  return (
    <div className={style.main}>
    <div className={style.content}>
     <div className={style.logobox}>

     </div>
     <div className={style.loginbox}></div>
    </div>
      
    </div>
  );
};

export default Start;
