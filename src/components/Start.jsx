import React from 'react';
import style from '../css/start.module.css';
import logo from "../assets/biglogo.png";
const Start = () => {
    
  return (
    <div className={style.main}>
    <div className={style.content}>
      <div className={style.contentImage}>
        <div className={style.logoContainer}>
        <img src={logo}alt="logo" className={style.logoImg}/>
        <p className={style.text}>The new era of intelligent <b>nutrition</b> is here</p>
        </div>
        <div className={style.buttonContainer}>
              <button className={style.button}>Get Started</button>
            </div>
      </div>
    </div>
      
    </div>
  );
};

export default Start;
