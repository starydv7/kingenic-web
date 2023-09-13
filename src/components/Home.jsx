import React from 'react'
import style from "../css/home.module.css";
import arrow from "../assets/arrow.png";
import logo from "../assets/biglogo.png";
import banner from "../assets/image1.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const handleBack=()=>{
    navigate("/")
  }
  return (
    <div className={style.maindiv}>
        <div className={style.navbardiv}>
       
          <div className={style.arrow}>
            <img src={arrow} alt="arrow" className={style.arrowImg} onClick={handleBack} />
          </div>
       
         <div className={style.logodiv}>
<img src={logo}alt="logo"className={style.logoImg}/>
         </div>
        </div>
        <div className={style.line}></div>
     <div className={style.bannerdiv}>
      <img src={banner}alt="banner"className={style.bannerImg}/>
     </div>
     <div className={style.cardDiv}>
        <div className={style.gridCard}>
          <div className={style.gridImg}>
            <img src={card1}alt="card1"className={style.cardimg}/>
          </div>
          <div className={style.gridText}>
            <p className={style.gridTitle}>Product Catalog</p>
            <p className={style.subTitle}>
            Explore our branded portfolio and private label offerings
            </p>
          </div>
        </div>
        <div className={style.gridCard}>
        <div className={style.gridImg}>
         <img src={card2}alt="card1"className={style.cardimg}/>
         </div>
          <div className={style.gridText}>
          <p className={style.gridTitle}>Customer Portal</p>
            <p className={style.subTitle}>
            From documentation to live service portal
            </p>
          </div>
        </div>
        <div className={style.gridCard}>
        <div className={style.gridImg}>
        <img src={card3}alt="card1"className={style.cardimg}/>
        </div>
          <div className={style.gridText}>
          <p className={style.gridTitle}>Learning Center</p>
            <p className={style.subTitle}>
            Access free, expert-created education based on your interests and needs.
            </p>
          </div>
        </div>
        <div className={style.fixedNavbar}>
        {/* Content for the fixed bottom navbar */}
      </div>
     </div>
    </div>
  )
}

export default Home