import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MenuListTypes } from '../../../../utils/types/DataTypes'
export default function Index() {

    
    
    return (
        <>
        {/* {menu.map((MenuList : MenuListTypes, Index)=>{
            (
                <> */}
                <div  className='relative sm:w-[48%] sm:h-[220px] border rounded-lg overflow-hidden'>
                                                <Image 
                                                src={`/image/menu-coffee-1.webp`}
                                                width={190}
                                                height={180}
                                                alt={"cofe 1"}
                                                className=""
                                                />
                                                <label className='absolute font-montserrat sm:text-xl sm:bottom-3 sm:left-3 text-white'>Guday fris anget</label>
                                                <span className='absolute font-montserrat sm:text-xs sm:top-2 sm:right-2 rounded-full bg-white p-2'>{`IDR 12K`}</span>
                </div>
                </>
        //     )
        // })}
        // </>
    )
    }
