import React from 'react';
import Navbar from'../components/organisms/Navbar/Index'
import Image from 'next/image'
import { VscSend } from "react-icons/vsc";

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
        <div className="flex flex-col ">
            <Navbar welcome={welcome} />

            
            <div className='lg:flex lg:flex-row bg-gray-50'>
                <div className='lg:w-[250%] lg:h-screen  lg:ml-[15%] sm:mt-20 lg:mt-0'>
                    <div className='lg:flex lg:flex-col justify-center items-center'>
                        <h1>Ini order</h1>
                        <div className='lg:flex lg:flex-wrap lg:flex-row lg:gap-[20px]'>
                            
                            <div className='lg:border rounded-[20px] lg:w-[360px] lg:h-[720px]'>
                                <div className='flex flex-col'>
                                    <div className='w-full h-[220px] bg-[#399E40] bg-opacity-[15%] bg-red-200 rounded-t-[20px]'>
                                        <div className='flex flex-row pt-[30px] px-[21px] justify-between items-center'>
                                            <span className='border bg-[#3DB645] text-white bg-opacity-[80%] font-fredoka py-[9px] px-[15px] rounded-[10px]'>
                                                <div className='flex flex-row gap-[5px] items-center'>
                                                    <VscSend className='-rotate-45 mb-1' size={18}/> 
                                                    <p>Ready to serve</p>
                                                </div>                                                
                                            </span>
                                            <p className='font-fredoka text-[#5A5959]'>Iva Kostica</p>
                                        </div>
                                        <div className='mt-[15px] font-fredoka flex flex-col gap-[8px] pl-[25px] pr-[35px]'>
                                            <p className='text-md'>Kata kata hari ini</p>
                                            <p className='text-sm text-[#5A5959] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi cum quibusdam sint dolorem nihil reiciendis? </p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col mt-[25px] px-[24px] gap-3'>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div> 
                                </div>
                            </div>

                            <div className='lg:border rounded-[20px] lg:w-[360px] lg:h-[720px]'>
                                <div className='flex flex-col'>
                                    <div className='w-full h-[220px] bg-[#399E40] bg-opacity-[15%] bg-red-200 rounded-t-[20px]'>
                                        <div className='flex flex-row pt-[30px] px-[21px] justify-between items-center'>
                                            <span className='border bg-[#3DB645] text-white bg-opacity-[80%] font-fredoka py-[9px] px-[15px] rounded-[10px]'>
                                                <div className='flex flex-row gap-[5px] items-center'>
                                                    <VscSend className='-rotate-45 mb-1' size={18}/> 
                                                    <p>Ready to serve</p>
                                                </div>                                                
                                            </span>
                                            <p className='font-fredoka text-[#5A5959]'>Iva Kostica</p>
                                        </div>
                                        <div className='mt-[15px] font-fredoka flex flex-col gap-[8px] pl-[25px] pr-[35px]'>
                                            <p className='text-md'>Kata kata hari ini</p>
                                            <p className='text-sm text-[#5A5959] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi cum quibusdam sint dolorem nihil reiciendis? </p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col mt-[25px] px-[24px] gap-3'>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div> 
                                </div>
                            </div>

                            <div className='lg:border rounded-[20px] lg:w-[360px] lg:h-[720px]'>
                                <div className='flex flex-col'>
                                    <div className='w-full h-[220px] bg-[#399E40] bg-opacity-[15%] bg-red-200 rounded-t-[20px]'>
                                        <div className='flex flex-row pt-[30px] px-[21px] justify-between items-center'>
                                            <span className='border bg-[#3DB645] text-white bg-opacity-[80%] font-fredoka py-[9px] px-[15px] rounded-[10px]'>
                                                <div className='flex flex-row gap-[5px] items-center'>
                                                    <VscSend className='-rotate-45 mb-1' size={18}/> 
                                                    <p>Ready to serve</p>
                                                </div>                                                
                                            </span>
                                            <p className='font-fredoka text-[#5A5959]'>Iva Kostica</p>
                                        </div>
                                        <div className='mt-[15px] font-fredoka flex flex-col gap-[8px] pl-[25px] pr-[35px]'>
                                            <p className='text-md'>Kata kata hari ini</p>
                                            <p className='text-sm text-[#5A5959] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi cum quibusdam sint dolorem nihil reiciendis? </p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col mt-[25px] px-[24px] gap-3'>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#399E40] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div> 
                                </div>
                            </div>

                            <div className='lg:border rounded-[20px] lg:w-[360px] lg:h-[720px]'>
                                <div className='flex flex-col'>
                                    <div className='w-full h-[220px] bg-[#EFFF12] bg-opacity-[15%] bg-red-200 rounded-t-[20px]'>
                                        <div className='flex flex-row pt-[30px] px-[21px] justify-between items-center'>
                                            <span className='border bg-[#A49F16] text-white bg-opacity-[80%] font-fredoka py-[9px] px-[15px] rounded-[10px]'>
                                                <div className='flex flex-row gap-[5px] items-center'>
                                                    <VscSend className='-rotate-45 mb-1' size={18}/> 
                                                    <p>Ready to serve</p>
                                                </div>                                                
                                            </span>
                                            <p className='font-fredoka text-[#5A5959]'>Iva Kostica</p>
                                        </div>
                                        <div className='mt-[15px] font-fredoka flex flex-col gap-[8px] pl-[25px] pr-[35px]'>
                                            <p className='text-md'>Kata kata hari ini</p>
                                            <p className='text-sm text-[#5A5959] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi cum quibusdam sint dolorem nihil reiciendis? </p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col mt-[25px] px-[24px] gap-3'>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#DEE947] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#DEE947] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#DEE947] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border w-full h-[100px] rounded-[12px] bg-[#DEE947] bg-opacity-[8%]'>
                                            <div className='flex flex-row py-[8px] ml-[10px]'>
                                                <div className='w-[80px] h-[82px] border rounded-[8px] -z-1 overflow-hidden fixed'>
                                                    <Image src={'/image/Menu-donnut-2.webp'} width={100} height={100} alt={'pesanan...'} className="-mt-3"/>
                                                </div>
                                                <div className='flex flex-col font-fredoka ml-[90px] gap-1 pr-2'>
                                                    <p>Donut Coklat</p>
                                                    <p className='text-[0.5rem] text-[#5A5959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum quis reprehenderit necessitatibus ad a id dicta tempore esse consequatur!</p>
                                                    <p className='text-[0.6rem] text-[#5A5959]'>Jumlah: 2</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
