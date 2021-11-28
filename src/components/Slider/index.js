import React, { useState, useEffect, useContext } from 'react'
import { FilterContext } from '../../contexts/FilterContext'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Cards from '../Cards'
import api from '../../config/api'

import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination])

function Slider() {
  const { filteredPlaces, setFilteredPlace } = useContext(FilterContext)
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const fetchPlaces = async () => {
      const result = await api.get(`/places?category=${filteredPlaces}`)

      if (result.status === 200) {
        setPlaces(result.data)
      }
    }
    fetchPlaces()
  }, [filteredPlaces])
  return (
    <Swiper
      slidesPerView={places.length > 1 ? 1 : places.length}
      breakpoints={{
        768: {
          slidesPerView: places.length > 2 ? 2 : places.length
        },
        1024: {
          slidesPerView: places.length > 4 ? 4 : places.length
        }
      }}
    >
      {places.map(item => (
        <SwiperSlide key={item.id}>
          <Cards key={item.id} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
