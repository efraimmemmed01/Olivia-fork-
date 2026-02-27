import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../assets/Photo/1.png';
import img2 from '../../assets/Photo/2.png';
import img3 from '../../assets/Photo/3.png';
import img4 from '../../assets/Photo/4.png';
import img5 from '../../assets/Photo/5.png';

const Brend = () => {
    return (
        <div className='w-[100%] gap-44'>
            <Swiper className='w-[90%]'
                spaceBetween={2}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide><img className='w-[300px] h-[300px]' src={img1} alt="Photo 1" /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[300px]' src={img2} alt="Photo 2" /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[300px]' src={img3} alt="Photo 3" /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[300px]' src={img4} alt="Photo 4" /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[300px]' src={img5} alt="Photo 5" /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[300px]' src={img1} alt="Photo 1" /></SwiperSlide>
                <SwiperSlide><img className='w-[300px] h-[300px]' src={img2} alt="Photo 2" /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Brend