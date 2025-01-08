import React, { useState } from 'react'
import Image from 'next/image'

export default function Category() {
    const [tab,setTab] = useState<string>("All")

    return (
    <>
        <button 
            onClick={()=>setTab("All")}
            className={`${tab =="All" ? "bg-orange-300 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex flex-col justify-center items-center p-3 gap-2 sm:h-[130px] sm:w-full shadow-lg`}>
                <div className={`${tab =="All" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                    <Image 
                        src={"/icon/menu-cards.svg"}
                        width={32.5}
                        height={20}
                        alt="All"
                        className=''
                    />
                </div>
                <label htmlFor="" className={`${tab =="All" ? "text-white text-lg" : ""} font-semibold `}>All</label>
            </button>

            <button 
            onClick={()=>setTab("Coffe")}
            className={`${tab =="Coffe" ? "bg-orange-300 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex flex-col justify-center items-center p-3 gap-2 sm:h-[130px] sm:w-full shadow-lg`}>
                <div className={`${tab =="Coffe" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                    <Image 
                        src={"/icon/coffee.svg"}
                        width={20}
                        height={20}
                        alt="Coffe"
                        className=''
                    />
                </div>
                <label htmlFor="" className={`${tab =="Coffe" ? "text-white text-lg" : ""} font-semibold `}>Coffe</label>
            </button>

            <button 
            onClick={()=>setTab("Ice")}
            className={`${tab =="Ice" ? "bg-orange-300 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex flex-col justify-center items-center p-3 gap-2 sm:h-[130px] sm:w-full shadow-lg`}>
                <div className={`${tab =="Ice" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                    <Image 
                        src={"/icon/milkshake2.svg"}
                        width={20}
                        height={20}
                        alt="Ice"
                        className=''
                    />
                </div>
                <label htmlFor="" className={`${tab =="Ice" ? "text-white text-lg" : ""} font-semibold `}>Ice</label>
            </button>

            <button 
            onClick={()=>setTab("Donut")}
            className={`${tab =="Donut" ? "bg-orange-300 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex flex-col justify-center items-center p-3 gap-2 sm:h-[130px] sm:w-full shadow-lg`}>
                <div className={`${tab =="Donut" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                    <Image 
                        src={"/icon/food.svg"}
                        width={35}
                        height={20}
                        alt="Donut"
                        className=''
                    />
                </div>
                <label htmlFor="" className={`${tab =="Donut" ? "text-white text-lg" : ""} font-semibold `}>Donut</label>
            </button>

            <button
            onClick={()=>setTab("Snack")}
            className={`${tab =="Snack" ? "bg-orange-300 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex flex-col justify-center items-center p-3 gap-2 sm:h-[130px] sm:w-full shadow-lg`}>
                <div className={`${tab =="Snack" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full bg-orange-300 overflow-hidden flex justify-center items-center`}>
                    <Image 
                        src={"/icon/frech-fries.svg"}
                        width={32}
                        height={20}
                        alt="Coffe"
                        className=''
                    />
                </div>
                <label htmlFor="" className={`${tab =="Snack" ? "text-white text-lg" : ""} font-semibold `}>Snack</label>
            </button>

    </>  
        )
}
