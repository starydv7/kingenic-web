import React from 'react'
import style from "../css/home.module.css";
const Home = () => {
  return (
    <div className={style.maindiv}>
        <div className={style.navbardiv}>
         <div className={style.arrow}></div>
         <div className={style.logodiv}></div>
        </div>
        <div className={style.line}></div>
     <div className={style.bannerdiv}>
      
     </div>
     <div className={style.cardDiv}>
        <div className={style.gridCard}></div>
        <div className={style.gridCard}></div>
        <div className={style.gridCard}></div>
     </div>
    </div>
  )
}

export default Home