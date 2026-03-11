import React from 'react'
import { useGetPostsQuery } from '../../service/postApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Coxsatilan from '../Minilogo/Coxsatilan';


const Card = () => {

  const { data, error, isLoading } = useGetPostsQuery()
  if (error)
    return <h1>there isn't data</h1>
  if (isLoading) return <h1>Loading..</h1>
  

  return (
    <>
      
            <div className='w-[100%] flex-col item-start justify-around mt-7'>
                <h1 className='w-[16%] flex items-start justify-center mt-6!'>Satış liderləri</h1>
                <ul className='w-[52%] flex items-center justify-center mt-6! gap-5'>
                    <li>Kipriklər üçün tuş</li>
                    <li>Dodaqlar üçün</li>
                    <li>Tonal kremlər</li>
                    <li>Konsilerlər</li>
                    <li>Göz laynerləri</li>
                </ul>
            </div>


      <div className='w-[100%] gap-44 mt-6!'>
        <Swiper className="w-[90%] h-[500px]flex items-center justify-center"
          spaceBetween={5}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {data.map((item) => {
            return <SwiperSlide className="flex items-center justify-around">
              <div className='h-[440px] w-[236px] border-1 flex flex-col items-center justify-center'>
                <img src={item.image} alt="Shoes" />
                <Coxsatilan data={item.badge} />
                <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                  <FontAwesomeIcon icon={faTruckFast} style={{ color: "white", }} />2 saat qapında </div>
                <div className='w-[220px] h-[130px] flex flex-col items-start justify-center'>
                  <h2 className='text-[#5e5959]'>{item.title}</h2>
                  <p>{item.description}</p>
                  <h6 className='bg-[#fae6eb] text-red-600 text-[14px] mt-2!'>-50%</h6>
                  <div><b className='mt-1!'>{item.price}</b></div>
                </div>
                <button className="text-white mt-2! w-[226px] h-[30px] btn btn-primary bg-violet-800">
                  Səbətə at</button>
              </div>
            </SwiperSlide>
          }
          )}



        </Swiper>
      </div>



    </>
  )
}

export default Card