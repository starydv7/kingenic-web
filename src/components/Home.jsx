import React from "react";
import style from "../css/home.module.css";
import arrow from "../assets/arrow.png";
import logo from "../assets/biglogo.png";
import banner from "../assets/image1.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import home from "../assets/Home_light.png";
import  atomlight from "../assets/Atom_light.png";
import portal from "../assets/Sertificate_light_light.png";
import learning from "../assets/Book_open_light.png";
import statusIcon from "../assets/Status.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className={style.maindiv}>
      <div className={style.navbardiv}>
        <div className={style.arrow} onClick={handleBack}>
          <img
            src={arrow}
            alt="arrow"
            className={style.arrowImg}
            onClick={handleBack}
          />
        </div>

        <div className={style.logodiv}>
          <img src={logo} alt="logo" className={style.logoImg} />
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.bannerdiv}>
        <img src={banner} alt="banner" className={style.bannerImg} />
      </div>
      <div className={style.cardDiv}>
        <div className={style.gridCard}>
          <div className={style.gridImg}>
            <img src={card1} alt="card1" className={style.cardimg} />
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
            <img src={card2} alt="card1" className={style.cardimg} />
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
            <img src={card3} alt="card1" className={style.cardimg} />
          </div>
          <div className={style.gridText}>
            <p className={style.gridTitle}>Learning Center</p>
            <p className={style.subTitle}>
              Access free, expert-created education based on your interests and
              needs.
            </p>
          </div>
        </div>
        <div className={style.fixedNavbar}>
         <div className={style.fixedNav}>
          <div className={style.home}>
            <img src={home}alt="home"className={style.homeIcon}/>
            <p className={style.icontext}>Home</p>
          </div>
          <div className={style.home}>
          <img src={atomlight}alt="home"className={style.productIcon}/>
            <p className={style.productText}>Product</p>
          </div>
          <div className={style.portal}>
          <img src={portal}alt="home"className={style.portalIcon}/>
            <p className={style.portalText}>Portal</p>
          </div>
          <div className={style.learning}>
          <img src={learning}alt="home"className={style.learningIcon}/>
            <p className={style.learningtext}>Learning</p>
          </div>
          <div className={style.home}>
          <img src={statusIcon}alt="home"className={style.contactIcon}/>
            <p className={style.contacttext}>Contact</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
