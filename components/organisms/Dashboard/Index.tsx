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
                        <h1 className='items-center text-[20rem] font-bold font-fredoka text-white'>Ray Coffe</h1>
                        <p className='text-xl text-white'>Tempat di mana aroma kopi terbaik bertemu dengan cerita hangat. Nikmati setiap tegukan, rasakan suasana yang menenangkan.</p>
                        <Link href={`/Menu`} className="mt-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 w-[20%]">Menu</Link>
                    </div>
                </div>
            </>
        )
}
