import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

import ArrowModal from './ArrowModal';
import ImageProduct from './ImageProduct';
import Checkout from './Checkout';
import Size from './Size';
import Title from './Title';



export default function Index({selected,setSelected}:any ) {

    if(!selected){
        return(
            <></>
        )
    }
    return (
        <>
            <motion.div
            initial={{y : 100,opacity : 0}}
            whileInView={{y : 0,opacity : 1}}
            transition={{duration : 0.5}}
            className='fixed inset-0 bg-gray-900 min-h-screen z-50 cursor-pointer overflow-y-scroll'>
                
                <motion.div 
                initial={{x : -50,opacity : 0}}
                whileInView={{x : 0,opacity : 1}}
                transition={{duration : 0.8,}}
                >
                <div className='sm:mt-7 sm:ml-7 rounded-lg border border-white absolute top-0 left-0'>
                    <ArrowModal setSelected={setSelected} />
                </div>    
                </motion.div>

                <motion.div
                onClick={(e)=> e.stopPropagation()}
                className="flex flex-col items-center"
                >
                    <ImageProduct selected={selected.image} />
                </motion.div>

                
                <motion.div 
                initial={{y : 100,opacity : 1}}
                whileInView={{y : 1,opacity : 1}}
                transition={{duration : 0.8,delay : 0.1}}
                className='absolute bg-transparent backdrop-blur-md inset-x-0 sm:p-10 bottom-5 rounded-t-[1rem] h-[45%]'>
                    <Title selected={selected} />
                </motion.div>
                
                {/* <Size  /> */}
                <Checkout selected={selected.price}/>


            </motion.div>
        </>
    )
}
