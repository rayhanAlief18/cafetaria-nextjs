import React from 'react'
import Image from 'next/image';

import {useState, } from 'react'

import { HiCheckCircle, HiInformationCircle } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

export default function ordersDetails() {

  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <>
      <nav className='bg-green-600 w-full lg:h-[70px] lg:flex items-center justify-around'>
          <div className='lg:pl-10'>
              <h1 className='font-fredoka text-2xl text-white'><span className='text-white'>Ray'</span> Coffe | <span className='text-xl opacity-[90%]'>Orders Payment</span></h1>
          </div>
          <div className='lg:flex lg:gap-[20px]'>
            <div className='flex gap-[7px] items-center'>
                <HiCheckCircle size={30} color="white"/>
                <p className='font-fredoka text-white text-lg'>Orders Payment</p>
              </div>
              <p className='font-fredoka text-lg text-white'>- - - - -</p>
              <div className='flex gap-[7px] items-center'>
                <div className='rounded-full px-[7px] py-[2px] bg-green-600 border-2 text-xs font-fredoka text-white font-semibold'>2</div>
                <p className='font-fredoka text-white text-lg'>Orders Payment</p>
              </div>
          </div>
      </nav>

      <section className='xl:flex gap-16 justify-center bg-[#F6F8FA]'>
        <div className='flex flex-col justify-center bg-[#F6F8FA]  w-[40%] pl-20 py-6'>
            
          <div className='border rounded-xl bg-white'>
            <div className='border-b bg-green-600 rounded-t-xl text-white                                                                                       '>
              <h1 className='text-center font-fredoka text-2xl pt-3 '>Summary Order</h1>
              <p className='text-center mt-1 mb-2 font-fredoka text-gray-400'>Check the orders before transaction</p>
            </div>

            <div className='p-5 lg:flex lg:flex-col bg-white rounded-lg h-[450px] overflow-auto mt-5'>
              <div className='flex gap-5 w-full p-5'>
                <div className='border border-2 w-[200px] h-[100px] rounded-md overflow-hidden'>
                  <Image
                    src={`/image/frenc fries.webp`}
                    width={200}
                    height={100}
                    alt="{MenuList.label}"
                    className="md:w-[100%] -mt-10"
                    />
                </div>
                <div className='w-full flex flex-col gap-2.5'>
                  <div className="flex gap-2 justify-between">
                      <h1 className="font-fredoka text-xl">Kentang Goreng</h1>
                      <p className='font-fredoka'>Rp 12.000</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-[70%]">
                      <p className="text-xs font-fredoka text-gray-700">Catatan: </p>
                      <p className="font-fredoka text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, cum!</p>
                    </div>
                        {/* <p className='font-fredoka'>Rp. 12.000</p> */}
                  </div>
                  
                </div>
              </div>
              <hr className="mb-3"/>

              <div className='flex gap-5 w-full p-5'>
                <div className='border border-gray-300 border-2 w-[200px] h-[100px] rounded-xl overflow-hidden'>
                  <Image
                    src={`/image/frenc fries.webp`}
                    width={200}
                    height={100}
                    alt="{MenuList.label}"
                    className="md:w-[100%] -mt-10"
                    />
                </div>
                <div className='w-full flex flex-col gap-2.5'>
                  <div className="flex gap-2 justify-between">
                      <h1 className="font-fredoka text-xl">Kentang Goreng</h1>
                      <p className='font-fredoka'>Rp 12.000</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-[70%]">
                      <p className="text-xs font-fredoka text-gray-700">Catatan: </p>
                      <p className="font-fredoka text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, cum!</p>
                    </div>
                        {/* <p className='font-fredoka'>Rp. 12.000</p> */}
                  </div>
                  
                </div>
              </div>
              <hr className="mb-3"/>

              <div className='flex gap-5 w-full p-5'>
                <div className='border border-gray-300 border-2 w-[200px] h-[100px] rounded-md overflow-hidden'>
                  <Image
                    src={`/image/frenc fries.webp`}
                    width={200}
                    height={100}
                    alt="{MenuList.label}"
                    className="md:w-[100%] -mt-10"
                    />
                </div>
                <div className='w-full flex flex-col gap-2.5'>
                  <div className="flex gap-2 justify-between">
                      <h1 className="font-fredoka text-xl">Kentang Goreng</h1>
                      <p className='font-fredoka'>Rp 12.000</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-[70%]">
                      <p className="text-xs font-fredoka text-gray-700">Catatan: </p>
                      <p className="font-fredoka text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, cum!</p>
                    </div>
                        {/* <p className='font-fredoka'>Rp. 12.000</p> */}
                  </div>
                  
                </div>
              </div>
              <hr className="mb-3"/>

              <div className='flex gap-5 w-full p-5'>
                <div className='border border-gray-300 border-2 w-[200px] h-[100px] rounded-md overflow-hidden'>
                  <Image
                    src={`/image/frenc fries.webp`}
                    width={200}
                    height={100}
                    alt="{MenuList.label}"
                    className="md:w-[100%] -mt-10"
                    />
                </div>
                <div className='w-full flex flex-col gap-2.5'>
                  <div className="flex gap-2 justify-between">
                      <h1 className="font-fredoka text-xl">Kentang Goreng</h1>
                      <p className='font-fredoka'>Rp 12.000</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-[70%]">
                      <p className="text-xs font-fredoka text-gray-700">Catatan: </p>
                      <p className="font-fredoka text-sm text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, cum!</p>
                    </div>
                        {/* <p className='font-fredoka'>Rp. 12.000</p> */}
                  </div>
                  
                </div>
              </div>
              <hr className="mb-3"/>

             
 
            </div>

            <div className='p-7 mt-10'>
              <div className='flex gap-2 items-center'>
                <label htmlFor="" className='font-fredoka text-xl mb-3'>Payment Method</label>
                <HiInformationCircle size={18} color="gray"/>
              </div>
              <div>
                
                <form action="">
                <div
                  className={`border-2 w-full h-[80px] overflow-hidden flex gap-5 items-center rounded-lg  transition-colors ${
                    selectedMethod === "qris" ? "border-green-500 shadow-xs shadow-green-500 " : "border-gray-300"
                  }`}>
                    <Image
                      src={`/logo/cash-logo.png`}
                      width={200}
                      height={100}
                      alt="{MenuList.label}"
                      className="md:w-[110px] ml-5"
                      />
                      
                        <div className='flex justify-between w-full'>
                            <div>
                                <h1 className='font-fredoka text-lg'>Cash</h1>
                                <p className='font-fredoka text-md'>Pay with physical money</p>
                            </div>
                            <input type="radio" name="payment_method" id="" className='mr-5 w-[20px] cursor-pointer ' value={"qris"} onChange={(e)=>setSelectedMethod(e.target.value)}></input>
                        </div>
                  </div>

                  <div
                  className={`border-2 w-full h-[80px] mt-5 overflow-hidden flex items-center rounded-lg transition-colors ${
                    selectedMethod === "cash" ? "border-green-500" : "border-gray-300"
                  }`}>
                    <Image
                      src={`/logo/qris-logo.png`}
                      width={200}
                      height={100}
                      alt="{MenuList.label}"
                      className="md:w-[150px]"
                      />
                      
                        <div className='flex justify-between w-full'>
                            <div>
                                <h1 className='font-fredoka text-lg'>Qris</h1>
                                <p className='font-fredoka text-md'>Pay with e wallet</p>
                            </div>
                            <input type="radio" name="payment_method" id="" className='mr-5 w-[20px] cursor-pointer' value={"cash"} onChange={(e)=>setSelectedMethod(e.target.value)}></input>
                        </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          </div>

        <div className='xl:flex items-center xl:justify-center w-[60%] bg-white '>
              <div className="flex flex-col gap-2 w-[90%] ">
              
                <div className='gap-3 w-full lg:flex lg:flex-col justify-center items-center font-fredoka'>
                  <p className='text-gray-600 text-xl'>Total Payment</p>
                  <h1 className='text-4xl'>Rp 52.500</h1>
                  <p className='text-lg text-gray-600'>Method payment <span className='text-green-700'>{`${selectedMethod}`}</span></p>
                </div>

                <hr className='my-5'/> 

                <div className='lg:px-20 lg:flex lg:flex-col lg:gap-4'>

                <div className='lg:flex lg:flex-col justify-center items-center'>
                  <label htmlFor="" className="font-fredoka">Pesanan atas nama</label>
                  <div className='relative flex items-center text-gray-500 focus-within:text-gray-600 mt-3 mb-5'>
                    <AiOutlineUser size={20} className='absolute left-5'/>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray-400 rounded-full w-[300px] h-[40px] focus:border-green-600 pl-12"
                      placeholder="Masukkan nama pemesan..."
                    />
                  </div>
                </div> 

                  <h1 className='font-fredoka text-xl text-gray-800 my-2'>Order Summary</h1>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Transaction Code :</p>
                    <p className='font-fredoka text-gray-700'>TMC0TC6</p>
                  </div>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Order date time :</p>
                    <div className='text-end'>
                      <p className='font-fredoka text-gray-700'>28/november/2024</p>
                      <p className='font-fredoka text-gray-700'>09:44:22</p>
                    </div>
                  </div>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Total menu :</p>
                    <p className='font-fredoka text-gray-700'>4</p>
                  </div>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Sub total menu :</p>
                    <p className='font-fredoka text-gray-700'>RP 48.000</p>
                  </div>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Tax 2.5% :</p>
                    <p className='font-fredoka text-gray-700'>RP 1.200</p>
                  </div>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Payment Customer :</p>
                    <p className='font-fredoka text-gray-700'></p>
                    <input type="number" className='border rouded-full text-right'/>
                  </div>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Method Payment :</p>
                    <p className='font-fredoka text-gray-700'>{`${selectedMethod}`}</p>
                  </div>
                  <div className='lg:flex justify-between'>
                    <p className='font-fredoka text-gray-700'>Return :</p>
                    <p className='font-fredoka text-gray-700'>Rp 800</p>
                  </div>
                </div>

                <div className="flex justify-center mt-10 ">
                    <button className=' border rounded-full py-3 px-5 w-[70%] bg-green-600 text-white 
                      hover:bg-green-700 transition-transform duration-300 transform 
                      hover:scale-105 active:scale-95'>Confirm Payment
                    </button>
                </div>

              </div>



        </div>
      </section>
    </>
  )
}
