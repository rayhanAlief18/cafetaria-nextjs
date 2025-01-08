import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


export default function Checkout({selected}:any) {
    return (
            <div className='absolute sm:bottom-[3%] sm:mx-16 flex flex-col gap-10 justify-center items-center bg-red-400'>
                        <div className='text-white flex flex-row items-center sm:gap-5'>
                            <button 
                            className='rounded-full border border-white sm:py-3 sm:px-3'>
                                <AiOutlineMinus size={"1.2em"}/>
                            </button>
                            <p className='sm:text-xl'> 1 </p>
                            <button 
                            className='rounded-full border border-white sm:py-3 sm:px-3'>
                                <AiOutlinePlus size={"1.2em"}/>
                            </button>
                        </div>
                        <div className='w-full flex flex-row  sm:gap-12 items-center'>
                            <div className='text-white'>
                                <p>{`Total Price : `}</p>
                            </div>
                            <div className="sm:text-sm bg-green-800 hover:bg-green-700 border border-green-800 hover:border-white text-white sm:py-2 sm:px-8 rounded-full">
                                {`${selected / 1000}K`}
                            </div>
                        </div>
                        <button className="sm:text-md sm:w-full bg-green-800 hover:bg-green-700 border border-green-800 hover:border-white text-white sm:py-3 sm:px-8 rounded-full">
                                {`Add Chart ${selected / 1000}K`}
                            </button>

                    </div>
        )
    }
