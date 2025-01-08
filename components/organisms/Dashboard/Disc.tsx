import React from 'react'
import Image from 'next/image';

// Swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Autoplay} from "swiper";

export default function Disc() {
  return (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
                }}
            autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
            >
                
                <SwiperSlide className=''>
                                        <div className='mt-2 bg-gray-100 border rounded-lg h-[170px] md:h-[250px] w-[10%] overflow-hidden -mb-2'>
                                            <div className='pl-5 pt-5'>
                                                <p className='text-2xl md:text-5xl font-semibold font-poppins font-base'>Share Happiness</p>
                                                <p className='text-xl md:text-3xl md:mt-2 font-bold font-montserrat italic'>Buy 1 Get 4</p>
                                                <button type="button" className="mt-5 py-2.5 px-5 mr-2 mb- text-sm md:text-md font-medium text-white focus:outline-none rounded-full border border-gray-200 hover:bg-gray-900  focus:z-10 focus:ring-4 focus:ring-gray-200 bg-gray-800  dark:border-gray-600 ">
                                                    Find out more
                                                </button>
                                            </div>
                                            <div className="flex justify-end ">
                                                <Image
                                                    className='bg-cover sm:w-[50%] sm:h-[50%] md:w-[50%] md:h-[50%] md:-mt-36  -mt-28 -mr-2 '
                                                    src={"/image/banner-1.webp"}
                                                    width={1000}
                                                    height={1000}
                                                    alt={"Logo"}
                                                    />
                                            </div>
                                        </div> 
                </SwiperSlide>

                <SwiperSlide className=''>
                                        <div className='mt-2 bg-gray-100 border rounded-lg w-full h-[170px] md:h-[250px] overflow-hidden -mb-2'>
                                            <div className='pl-5 pt-5'>
                                                <p className='text-2xl md:text-5xl font-semibold font-poppins font-base'>Disc up to 50%</p>
                                                <p className='text-xl md:text-3xl md:mt-2 font-bold font-montserrat italic'>All Variant</p>
                                                <button type="button" className="mt-5 py-2.5 px-5 mr-2 mb- text-sm md:text-md font-medium text-white focus:outline-none rounded-full border border-gray-200 hover:bg-gray-900  focus:z-10 focus:ring-4 focus:ring-gray-200 bg-gray-800  dark:border-gray-600 ">
                                                    Find out more
                                                </button>
                                            </div>
                                            <div className="flex justify-end ">
                                                <Image
                                                    className='bg-cover sm:w-[50%] sm:h-[50%] md:w-[50%] md:h-[50%] md:-mt-40  -mt-28 -mr-2 '
                                                    src={"/image/banner-3.webp"}
                                                    width={1000}
                                                    height={1000}
                                                    alt={"Logo"}
                                                    />
                                            </div>
                                        </div> 
                </SwiperSlide>


                                    
        </Swiper>
    </>
  )
}
