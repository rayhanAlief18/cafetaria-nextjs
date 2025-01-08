import React from 'react'
import Navbar from '../components/organisms/Navbar/Index'
import Image from 'next/image'
import { VscOutput, VscChromeClose } from "react-icons/vsc";
export default function chart() {
return (
    <>
        <div className='flex flex-col'>
            <Navbar welcome={""} />
                <div className='sm:px-7 sm:pt-20'>
                    <div className='sm:flex sm:flex-col'>
                        <div>
                            
                        </div>
                        <div>
                            <div className='mt-10 '>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20} />
                                </div>
                                <div className='sm:flex sm:border-b pb-2 sm:flex-row sm:mt-3 sm:gap-3 '>
                                    <div className='sm:border sm:w-[40%] sm:h-[150px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/frenc fries.webp"} className='-mt-7' height={0} width={180} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Kentang Goreng</p>
                                        <p className='sm:font-fredoka'>Disc: <span className='sm:border sm:font-fredoka sm:border-transparent sm:p-[0.10rem] sm:rounded-lg sm:px-2 sm:bg-green-700 sm:text-white'>50%</span></p>
                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                    <p className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka'>-</p>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <p className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka'>+</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='mt-5 '>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20}/>
                                </div>
                                <div className='sm:flex sm:border-b pb-2 sm:flex-row sm:mt-3 sm:gap-3 '>
                                    <div className='sm:border sm:w-[40%] sm:h-[150px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/Menu-coffe-1.webp"} className='-mt-7' height={0} width={180} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Kentang Goreng</p>
                                        <p className='sm:font-fredoka'>Disc: <span className='sm:border sm:font-fredoka sm:border-transparent sm:p-[0.10rem] sm:rounded-lg sm:px-2 sm:bg-green-700 sm:text-white'>50%</span></p>
                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                    <button className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka sm:active:scale-105' >
                                                        <span className="active:scale-105 block transition-transform duration-150">-</span>
                                                    </button>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <button className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka sm:active:scale-105'>
                                                        <span className="active:scale-105 block transition-transform duration-150">+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Nota */}
                            <div className='mt-5 pb-5'>
                                <div className='sm:flex sm:flex-row sm:items-center sm:gap-3'>
                                    <VscOutput className='text-green-600' size={20}/>
                                    <p className='sm:font-fredoka'>Detail Pesanan</p>
                                </div>
                                <div>
                                    <div className='sm:mt-3 sm:flex sm:flex-row sm:justify-between'>
                                        <p className='sm:font-fredoka'>Subtotal:</p>
                                        <p className='sm:font-fredoka'>Rp 22.000</p>
                                    </div>
                                    <div className='sm:mt-3 sm:flex sm:flex-row sm:justify-between'>
                                        <p className='sm:font-fredoka'>Tax 2.5%:</p>
                                        <p className='sm:font-fredoka'>Rp 562.5</p>
                                    </div>
                                    <div className='sm:mt-3 sm:flex sm:flex-row sm:justify-between'>
                                        <p className='sm:font-fredoka'>Disc:</p>
                                        <p className='sm:font-fredoka'>Rp 11.000</p>
                                    </div>
                                    <div className='sm:mt-3 sm:flex sm:flex-row sm:justify-between sm:text-lg sm:pt-5'>
                                        <p className='sm:font-fredoka'>Total Bayar:</p>
                                        <p className='sm:font-fredoka'>Rp 22.562.5</p>
                                    </div>
                                    <button className='sm:w-full sm:border sm:p-5 sm:text-white sm:bg-green-600 sm:hover:bg-green-700 sm:duration-200 sm:active:scale-105 sm:rounded-full sm:mt-5'>Buat Pesanan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
    )
}
