import React from 'react'
import Header from '../Navbar/Index'
import Footer from '../Footer/Index'
import Image from 'next/image';
import Line from './Line';
import Disc from './Disc';
import Link from 'next/link';

export default function Index() {
    const clock = Number(new Date().getHours());
    let welcome = ""

    if(clock < 10){
        welcome = "Good Morning !"
    }else if(clock >= 10 && clock <= 16 ) {
        welcome = "Good Evening !"
    }else if(clock > 16){
        welcome = "Good Afternoon !"
    }

    const backgroundUrl = "/image/coffe-banner-2.jpg"
    return (
            <>
                <div className='relative bg-cover bg-center h-screen w-full ' 
                style={{
                    backgroundImage: `url(${backgroundUrl})`,
                }}>
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
                    <div className='absolute w-full h-screen flex flex-col items-center justify-center'>
                        <div className='relative ml-20'>
                            <p className='absolute left-[160px] -top-[20px] text-[4rem] font-bold font-fredoka text-white'>Hello... Welcome</p>
                            <h1 className='ml-36 text-[15rem] font-bold font-fredoka text-white'>Ray Coffe</h1>
                            <p className=' text-2xl text-white font-fredoka'>Tempat di mana aroma kopi terbaik bertemu dengan cerita hangat. Nikmati setiap tegukan, rasakan suasana yang menenangkan.</p>
                        </div>
                        <Link href={`/Menu`} className="mt-[2rem] text-gray-900 bg-[#118B50] text-white focus:ring-4 focus:outline-none focus:ring-[#118B50]/50 font-medium rounded-lg text-xl font-fredoka text-center inline-flex justify-center items-center dark:focus:ring-[#118B50]/50 me-2 xl:w-[250px] xl:h-[50px] hover:scale-110 duration-300">Menu</Link>
                    </div>
                </div>
            </>
        )
}
