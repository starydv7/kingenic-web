import React from 'react'
import style from "../css/product.module.css";
import arrow from "../assets/arrow.png";
import logo from "../assets/biglogo.png";
import banner from "../assets/images/bannerProduct.png";
const ProductMain = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.header}>
        <div className={style.arrowIcon}>
            <img src={arrow}alt="arrow"className={style.arrowimg}/>
             </div>
        <div className={style.logo}> 
        <img src={logo}alt="arrow"className={style.logoimg}/>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.banner}>
       <img src={banner}alt="banner"className={style.bannerimg}/>
      </div>
    </div>
  )
}

export default ProductMain;