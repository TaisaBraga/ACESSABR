import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Cards from '../Cards'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination])

function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 4
        }
      }}
    >
      <SwiperSlide>
        <Cards />
      </SwiperSlide>
      <SwiperSlide>
        <Cards />
      </SwiperSlide>
      <SwiperSlide>
        <Cards />
      </SwiperSlide>
      <SwiperSlide>
        <Cards />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
