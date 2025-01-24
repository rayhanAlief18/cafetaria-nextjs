import React from 'react';
import Navbar from'../components/organisms/Navbar/Index'
import Image from 'next/image'
import { VscSend } from "react-icons/vsc";
import { VscCheckAll } from "react-icons/vsc";
import Link from 'next/link';

const clock = Number(new Date().getHours());
let welcome = ""

if(clock < 10){
    welcome = "Good Morning !"
}else if(clock >= 10 && clock <= 16 ) {
    welcome = "Good Evening !"
}else if(clock > 16){
    welcome = "Good Afternoon !"
}

export default function ordersBoard() {
    return (
        <div className="flex flex-row bg-gray-50 h-screen">
            <Navbar/>
            <section className='pl-[15%] w-[100vw] flex flex-col gap-5'>
                <div className='flex items-center justify-between font-fredoka px-10 mt-5'>
                    <h1 className='text-2xl'>Orders</h1>
                    <p className='pr-6'>Wednesday 12 July 2023</p>
                </div>
                <div className='px-10 flex xl:gap-3'>
                    <button className='border border-gray-300 rounded-md py-1 px-4 font-fredoka text-md bg-green-700 text-white '> All </button>
                    <button className='border border-gray-300 rounded-md py-1 px-5 font-fredoka text-md'> On Progress </button>
                    <button className='border border-gray-300 rounded-md py-1 px-5 font-fredoka text-md'> Complete </button>
                </div>

                <div className='flex flex-row gap-5 flex-wrap w-100vw px-10 '>
                    <div className='border rounded-[15px] px-7 pt-7 w-[32%] bg-white shadow-sm text-gray-900'>
                        {/* identitas */}
                        <div className='flex xl:flex-row w-full '>
                            <div className='flex flex-col w-full'>
                                <div className='flex justify-between '>
                                    
                                    <div className='flex gap-2'>
                                        <div className='font-fredoka font-semibold text-white rounded-lg border p-3 bg-[#036D6A]'>
                                            RAF
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='font-fredoka text-xl'>Rayhan Alief</p>
                                            <p className='text-sm font-fredoka'>Orders RAF923 / Dine In</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <span className='flex gap-1 border bg-[#D4F6E7] rounded-md px-2 text-green-900 items-center h-[30px]'>
                                        <VscCheckAll size={18}/>
                                        <p className='font-fredoka text-sm font-semibold'>
                                            Ready to Serve
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between font-fredoka text-md mt-5 text-gray-500'>
                            <p>Wednesday, July 12 2023</p>
                            <p>10:30 Pm</p>
                        </div>
                        <div className='border-b mt-5 mb-5'></div>

                        <div className="flex flex-col justify-center">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                        {/* table start */}
                                    <table className="min-w-full divide-y divide-gray-200 font-fredoka">
                                    <thead>
                                        <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">French Fries</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 24.000</td>
                                        </tr>

                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Donut Pink</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 7.000</td>
                                        </tr>

                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Americano</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 20.000</td>
                                        </tr>

                                    </tbody>
                                    </table>
                                    {/* table end */}
                                    
                                    <div className='border-b'></div>
                                    <div className='my-5 flex justify-between font-semibold tracking-wider font-fredoka text-lg'>
                                        <p className='pl-6'>Total:</p>
                                        <p className='pr-10'>Rp 51.000</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex xl:justify-center'>
                        <button type="button" className=" tracking-wider mb-5 py-3 px-4 w-[50%] justify-center inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#FFCC3C] text-gray-900 font-fredoka ">
                                See Details
                            </button>

                        </div>
                        
                        
                    </div>

                    <div className='border rounded-[15px] px-7 pt-7 w-[32%] bg-white shadow-sm text-gray-900'>
                        {/* identitas */}
                        <div className='flex xl:flex-row w-full '>
                            <div className='flex flex-col w-full'>
                                <div className='flex justify-between '>
                                    
                                    <div className='flex gap-2'>
                                        <div className='font-fredoka font-semibold text-white rounded-lg border p-3 bg-yellow-500'>
                                            RAF
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='font-fredoka text-xl'>Rayhan Alief</p>
                                            <p className='text-sm font-fredoka'>Orders RAF923 / Dine In</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <span className='flex gap-1 border bg-yellow-200 rounded-md px-2 text-yellow-900 items-center h-[30px]'>
                                        <VscCheckAll size={18}/>
                                        <p className='font-fredoka text-sm font-semibold'>
                                            Ready to Serve
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between font-fredoka text-md mt-5 text-gray-500'>
                            <p>Wednesday, July 12 2023</p>
                            <p>10:30 Pm</p>
                        </div>
                        <div className='border-b mt-5 mb-5'></div>

                        <div className="flex flex-col justify-center">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                        {/* table start */}
                                    <table className="min-w-full divide-y divide-gray-200 font-fredoka">
                                    <thead>
                                        <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">French Fries</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 24.000</td>
                                        </tr>

                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Donut Pink</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 7.000</td>
                                        </tr>

                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Americano</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 20.000</td>
                                        </tr>

                                    </tbody>
                                    </table>
                                    {/* table end */}
                                    
                                    <div className='border-b'></div>
                                    <div className='my-5 flex justify-between font-semibold tracking-wider font-fredoka text-lg'>
                                        <p className='pl-6'>Total:</p>
                                        <p className='pr-10'>Rp 51.000</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex xl:justify-center'>
                        <button type="button" className=" tracking-wider mb-5 py-3 px-4 w-[50%] justify-center inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#FFCC3C] text-gray-900 font-fredoka ">
                                See Details
                            </button>

                        </div>
                        
                        
                    </div>

                    <div className='border rounded-[15px] px-7 pt-7 w-[32%] bg-white shadow-sm text-gray-900'>
                        {/* identitas */}
                        <div className='flex xl:flex-row w-full '>
                            <div className='flex flex-col w-full'>
                                <div className='flex justify-between '>
                                    
                                    <div className='flex gap-2'>
                                        <div className='font-fredoka font-semibold text-white rounded-lg border p-3 bg-[#036D6A]'>
                                            RAF
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='font-fredoka text-xl'>Rayhan Alief</p>
                                            <p className='text-sm font-fredoka'>Orders RAF923 / Dine In</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <span className='flex gap-1 border bg-[#D4F6E7] rounded-md px-2 text-green-900 items-center h-[30px]'>
                                        <VscCheckAll size={18}/>
                                        <p className='font-fredoka text-sm font-semibold'>
                                            Ready to Serve
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between font-fredoka text-md mt-5 text-gray-500'>
                            <p>Wednesday, July 12 2023</p>
                            <p>10:30 Pm</p>
                        </div>
                        <div className='border-b mt-5 mb-5'></div>

                        <div className="flex flex-col justify-center">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                        {/* table start */}
                                    <table className="min-w-full divide-y divide-gray-200 font-fredoka">
                                    <thead>
                                        <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Quantity</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">French Fries</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 24.000</td>
                                        </tr>

                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Donut Pink</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">1</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 7.000</td>
                                        </tr>

                                        <tr className="hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">Americano</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 20.000</td>
                                        </tr>

                                    </tbody>
                                    </table>
                                    {/* table end */}
                                    
                                    <div className='border-b'></div>
                                    <div className='my-5 flex justify-between font-semibold tracking-wider font-fredoka text-lg'>
                                        <p className='pl-6'>Total:</p>
                                        <p className='pr-10'>Rp 51.000</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex xl:justify-center gap-3'>
                        <button type="button" className=" tracking-wider mb-5 py-3 px-4 w-[40%] justify-center inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-400 text-gray-900 font-fredoka ">
                                See Details
                            </button>
                            <button type="button" className=" tracking-wider mb-5 py-3 px-4 w-[40%] justify-center inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-400 text-gray-900 font-fredoka ">
                                See Details
                            </button>
                        </div>
                        
                        
                    </div>

                    
                    
                </div>
            </section>
        </div>
    )
}
