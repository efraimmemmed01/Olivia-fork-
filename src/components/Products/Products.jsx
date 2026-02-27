import React from 'react'

import img6 from '../../assets/Photo/microsoft.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';



const Products = () => {
    return (
        <div>
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

                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2025-09-19t112528.959.webp" alt="Shoes" />
                            <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                            
                            
                            
                            <div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[440px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2023-05-15t143237.970.webp" alt="Shoes" />
                                <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                                <div className='w-[220px] h-[130px] flex flex-col items-start justify-center'>
                                <h2 className='text-[#5e5959]'>EVELINE</h2>
                                <p>Tuş Eveline Bıg Valume Lash suyadavamlı</p>
                                <h6 className='bg-[#fae6eb] text-red-600 text-[14px] mt-2!'>-10%</h6>
                                <div><b className='mt-1!'>8.09 ₼</b> <s>8.99 ₼</s></div>
                            </div>
                            <button className="text-white mt-2! w-[226px] h-[30px] btn btn-primary bg-violet-800">
                             
                               Səbətə at</button>
                        
                        
                        </div>
                    </SwiperSlide>



                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2025-09-22t100417.898.webp" alt="Shoes" />
                                                       <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                            <div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0084-1.webp" alt="Shoes" />
                                                        <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div><div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0126-1_1.webp" alt="Shoes" />
                                                       <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                            <div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0107-1.webp" alt="Shoes" />
                                                        <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                            <div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2025-09-19t125220.411.webp" alt="Shoes" />
                                                        <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                            <div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-csm-1119-mc-0153_1.webp" alt="Shoes" />
                                                        <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                            <div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/0/0/00-10013087-1_1.webp" alt="Shoes" />
                                                        <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div>
                            <div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-around">
                        <div className='h-[400px] w-[236px] border-1 flex flex-col items-center justify-center'>
                            <img src="https://olivia.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new_project_-_2025-09-19t112528.959.webp" alt="Shoes" />
                                                        <div className='bg-[#178f5a] w-[236px] text-white flex items-center justify-center gap-1'>
                                <FontAwesomeIcon icon={faTruckFast} style={{color: "white",}} />2 saat qapında </div><div>
                                <h2>BELORDESIGN</h2>
                                <p>Tuş Belordesign black corset</p>
                                <p>5.79</p>
                                <h6>-50%</h6>
                            </div>
                            <button className="btn btn-primary bg-violet-800">Səbətə at</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>



        </div>

    )

}

export default Products