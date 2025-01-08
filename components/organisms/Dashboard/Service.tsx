import React from 'react'
import {motion} from 'framer-motion'
import Lottie  from 'lottie-react'
import Clock from '../../../public/lottie/clock.json'
import Game from '../../../public/lottie/game.json'
import Wifi from '../../../public/lottie/wifi.json'
import { FaInfo} from "react-icons/fa";


export default function Service() {
    return (
    <>
    <div className='-z-10 w-[185px] md:w-[200px]  cursor-pointer duration-200 snap-center flex flex-col rounded-lg pt-7 items-center justify-center space-y-7 flex-shrink-0 '>
        <motion.div
        className='relative border border-gray-600 bg-sky-50 hover:bg-sky-200 rounded-lg flex flex-col gap-2 py-5'
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{ duration: 1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
        <Lottie 
        animationData={Wifi} 
        loop={true} 
        className="border border-[#272343] rounded-lg ml-5 bg-slate-50 w-[70px]"/>
        <div className='absolute text-[#272343] border border-[#272343] rounded-full p-1.5 right-2 top-2'>
            <FaInfo />
        </div>
        <div className='px-3'>
            <div className="mt-2">
                <div className='tiang'></div>
                <p className="ml-5 mt-2 text-lg font-bold">Wifi Area</p>
            </div>
            <p className='ml-2 mt-1'>{"Password : CukcesCelalu:)"}</p>
        </div>

        </motion.div>
    </div>

    <div className='-z-10 w-[185px] md:w-[200px]  cursor-pointer duration-200 snap-center flex flex-col rounded-lg pt-7 items-center justify-center space-y-7 flex-shrink-0 '>
        <motion.div
        className='relative border border-gray-600 bg-sky-50 hover:bg-sky-200 rounded-lg flex flex-col gap-2 py-5'
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{ duration: 1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
        <Lottie animationData={Game} loop={true} className="border border-[#272343] rounded-lg ml-5 bg-slate-50 w-[70px]"/>
        <div className='absolute text-[#272343] border border-[#272343] rounded-full p-1.5 right-2 top-2'>
            <FaInfo />
        </div>
        <div className='px-3'>
            <div className="mt-2">
                <div className='tiang'></div>
                <p className="ml-5 mt-2 text-lg font-bold">Board Game</p>
            </div>
            <p className='ml-2 mt-1'>{"Board Game terletak dibagian selatan"}</p>
        </div>

        </motion.div>
    </div>

    <div className='-z-10 w-[185px] md:w-[200px]  cursor-pointer duration-200 snap-center flex flex-col rounded-lg pt-7 items-center justify-center space-y-7 flex-shrink-0 '>
        <motion.div
        className='relative border border-gray-600 bg-sky-50 hover:bg-sky-200 rounded-lg flex flex-col gap-2 py-5'
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{ duration: 1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        >
        <Lottie animationData={Clock} loop={true} className="border border-[#272343] rounded-lg ml-5 bg-slate-50 w-[70px]"/>
        <div className='absolute text-[#272343] border border-[#272343] rounded-full p-1.5 right-2 top-2'>
            <FaInfo />
        </div>
        <div className='px-3'>
            <div className="mt-2">
                <div className='tiang'></div>
                <p className="ml-5 mt-2 text-lg font-bold">Operational</p>
            </div>
            <p className='ml-2 mt-1'>{"Cafe beroprasi pada : 16:00 - 00:00"}</p>
        </div>

        </motion.div>
    </div>


    </>
        )
    }
