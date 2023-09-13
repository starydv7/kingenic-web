import React, { useState } from 'react';
import style from '../css/start.module.css';
import logo from "../assets/biglogo.png";
import apple from "../assets/apple.png";
import {useNavigate } from 'react-router-dom';
const Start = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleGetStartedClick = () => {
    navigate('/home');
  };
    
  return (
    <div className={style.main}>
    <div className={style.content}>
     <div className={style.logobox}>
       <div className={style.imgContainer}>
        <img src={logo} alt="logoimg" className={style.logoImg}/>
       </div>
       <div className={style.imgText}>
        The new era of intelligent <b>nutrition</b> is here
       </div>
     </div>
     <div className={style.loginbox}>
      <div className={style.emailLabel}>
        <p className={style.emailText}>Enter your email and get started</p>
      </div>
      <div className={style.inputbox}>
      <input
        type="text"
        className="input"
        placeholder="E-mail Address"
        
      />
      <div className={style.arrowicon}>
        
       <img src={apple}alt="icon" className={style.iconImg} onClick={handleGetStartedClick}/>
      </div>
          </div>
          <div className={style.checkboxText}>
            <div className={style.checkbox}>
              <input type='checkbox'/>
            </div>
            <div className={style.checkText}>
              <p className={style.text}>Keep me signed in</p>
            </div>
          </div>
          <div className={style.administration}>
            <p className={style.adminText}>Cannot sign in ? Contact administrator</p>
          </div>
          <div className={style.copyright}>
            <p className={style.copyText}>Copyright © 2023 Kingenic Consumer Healthcare LLC. All rights reserved.</p>
          </div>
     </div>
    </div>
      
    </div>
  );
};

export default Start;
