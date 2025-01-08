import React from 'react'
import { CiCoffeeBean } from "react-icons/ci";
import { TbMilk } from "react-icons/tb";

export default function Title({selected}:any) {
    return (
                    <div className='flex justify-between items-center '>
                            <div className=''>
                                <p className='text-white sm:text-2xl'>{selected.label}</p>
                                <label className='text-white text-xs'>{selected.desc}</label>
                            </div>
                            <div className='flex flex-row gap-2'>
                                {/* <p className='text-xl text-white'>{`Rp.${selected.price / 1000}K`}</p> */}
                                <div className='flex flex-col'>
                                    <div className="border p-1 rounded-lg flex flex-col justify-center">
                                        <div  className='flex flex-col bg-green-900 rounded border p-1 sm:h-[38.875px]'>
                                            <CiCoffeeBean className='text-stone-300' size={"1.75rem"} />
                                        </div>
                                        <label className='text-white text-xs text-center my-1'>Coffe</label>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className="border p-1 rounded-lg flex flex-col justify-center">
                                        <div  className='flex flex-col bg-green-900 rounded border p-1 sm:h-[38.875px]'>
                                            <TbMilk className='text-stone-300' size={"1.75rem"} />
                                        </div>
                                        <label className='text-white text-xs text-center my-1'>Milk</label>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}
