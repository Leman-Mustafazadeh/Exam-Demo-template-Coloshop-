import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ColorContext } from '../../context/ContextShops';
import styles from "./index.module.scss"
const BestSellers = () => {
  const {shops,setShops} = useContext(ColorContext)
  return (
    <section className={styles.best}>
      <div className="container">
        <h1>Best Sellers</h1>

        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {shops.map((item)=>{
        return(
          <SwiperSlide className={styles.swip}> 
          <img src={item.imgSrc} alt="" />
            <h5>{item.name}</h5>
            <p>${item.price}</p>
          </SwiperSlide>
        )
       })}
       
      </Swiper>




      </div>
    </section>
  )
}

export default BestSellers
