import {Pivot as Hamburger} from 'hamburger-react'
import  React from 'react'
import Logo from '../../atoms/Logo/Index'
import { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'


// Lottie
import Lottie from "lottie-react";
import Avatar from '../../../public/lottie/male-avatar.json'


export default function Index() {
  const [open, setIsopen] = useState<boolean>(false)
    return (
        <nav className='sm:bg-green-600 lg:bg-transparent sm:fixed lg:block w-full h-[67px] z-10'>
                <div className='flex justify-between items-center'>
                  <Logo className={`${open ? "left-5" : "left-5"}`} Title=""/>

                  <button 
                  type='button'
                  className={`${open ? "sm:right-[44%]  md:top-[4.8rem] top-[4.7rem]" : "sm:right-3"} lg:hidden sm:absolute top-2 border duration-300 transition-all rounded-lg border-[#272343] z-20`}
                  onClick={()=> setIsopen(!open)}
                  >
                    <Hamburger 
                    size={open ? 25 : 25}
                    duration={0.3}
                    distance="lg"
                    color={"#272343"}
                    rounded
                    />
                  
                  </button>
                  
                  <aside className={`${open ? "sm:left-0 lg:sm-left-0" : "sm:-left-full lg:left-0"} md:none duration-300 transition-all overflow-hidden sm:absolute lg:block h-screen lg:top-[0%]  sm:top-[100%]  lg:w-[15%] sm:w-[58%] bg-white border`}>
                    <div className="flex flex-row items-center justify-center p-5 my-3">
                        <p className='font-fredoka text-2xl '><span className='text-green-600'>Ray</span>Coffe</p>
                    </div>
                      

                      <ul className='w-full flex flex-col gap-2 px-5'>
                        {/* <label className='ml-4 py-2 font-fredoka'>Menu</label> */}
                        <Menu />
                        
                        {/* iv className='border h-screen w-full border-gray-900 rounded-lg bg-white px-8'>
                            <div className='py-5 flex flex-row justify-between items-center'>
                                <p className='font-fredoka text-2xl'>Pesanan Anda</p>
                                <p className='font-fredoka text-lg'>meja 3</p>
                            </div>
                            <div className='border bg-slate-50 rounded-lg h-[500px] overflow-auto'>
                                <div className='p-8 flex flex-row gap-4'>
                                <Image 
                                    src={"/image/Menu-coffe-2.webp"}
                                    width={100}
                                    height={100}
                                    alt={"Menu Coffe 1"}
                                    className="rounded-md"
                                    />
                                    <div className='flex flex-col justify-between '>
                                        <p className='font-fredoka text-lg'>Gud day Freeze</p>
                                        <p>Lorem ipsum dolor sit amet consectetur </p>
                                        <div className='mt-3 lg:flex lg:flex-row ml-2 items-center gap-5'>
                                            <p className='font-fredoka text-sm'>Rp 12.000</p>
                                            <div className='lg:flex lg:flex-row gap-2 justify-center items-center'>
                                                <button className='font-fredoka border-2 rounded-full px-3 py-1'>+</button>
                                                <p className='font-fredoka'>3</p>
                                                <button className='font-fredoka border-2 rounded-full px-3 py-1'>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 flex flex-row gap-5'>
                                <Image 
                                    src={"/image/Menu-coffe-2.webp"}
                                    width={100}
                                    height={100}
                                    alt={"Menu Coffe 1"}
                                    className="rounded-md"
                                    />
                                    <div className='flex flex-col justify-between '>
                                        <p className='font-fredoka text-lg'>Gud day Freeze</p>
                                        <p>Lorem ipsum dolor sit amet consectetur </p>
                                        <div className='mt-3 lg:flex lg:flex-row ml-2 items-center gap-5'>
                                            <p className='font-fredoka'>Rp 12.000</p>
                                            <div className='lg:flex lg:flex-row gap-2 justify-center items-center'>
                                                <button className='font-fredoka border-2 rounded-full px-3 py-1'>+</button>
                                                <p className='font-fredoka'>3</p>
                                                <button className='font-fredoka border-2 rounded-full px-3 py-1'>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-5 flex flex-row gap-5'>
                                <Image 
                                    src={"/image/Menu-coffe-2.webp"}
                                    width={100}
                                    height={100}
                                    alt={"Menu Coffe 1"}
                                    className="rounded-md"
                                    />
                                    <div className='flex flex-col justify-between '>
                                        <p className='font-fredoka text-lg'>Gud day Freeze</p>
                                        <p>Lorem ipsum dolor sit amet consectetur </p>
                                        <div className='mt-3 lg:flex lg:flex-row ml-2 items-center gap-5'>
                                            <p className='font-fredoka'>Rp 12.000</p>
                                            <div className='lg:flex lg:flex-row gap-2 justify-center items-center'>
                                                <button className='font-fredoka border-2 rounded-full px-3 py-1'>+</button>
                                                <p className='font-fredoka'>3</p>
                                                <button className='font-fredoka border-2 rounded-full px-3 py-1'>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div> */}

                      </ul>
                  </aside>
                </div>

        </nav>
        )
    }
