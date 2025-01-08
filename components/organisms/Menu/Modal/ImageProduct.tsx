import React from 'react'
import {motion} from 'framer-motion'
export default function ImageProduct({selected}:any) {
    return (
        <motion.img
                        initial={{
                            y : 100,
                            opacity : 0
                        }}
                        whileInView={{
                            y : 0,
                            opacity : 1
                        }}
                        transition={{
                            duration : 0.5
                        }}
                        className='w-full sm:p-3 rounded-3xl'
                        src={`/image/${selected}`}
                        width={200}
                        height={200}
                        alt={"Menu"}
                        />
    )
    }
