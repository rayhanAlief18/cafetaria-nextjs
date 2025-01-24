import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import Disc from '../Dashboard/Disc';
import Select from 'react-select'
import Image from 'next/image';
import Category from './Category';
import Modal from './Modal/Index'
import axios from 'axios';
import Link from 'next/link'
import { MenuListTypes } from '../../../utils/types/DataTypes';
import { VscOutput, VscChromeClose, VscArchive } from "react-icons/vsc";
import { RxCheckCircled } from "react-icons/rx";


export default function Menu() {

    const [getMenu,getSetMenu] = useState([]);

    useEffect(()=>{
        const fetchMenu = async ()=>{
            try{    
                const responseMenu = await axios.get('http://127.0.0.1:8000/api/menu');
                console.log(responseMenu.data.data);
                getSetMenu(responseMenu.data.data);
            }catch(error){
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenu();
    },[])

    const GetMenu =[
        
        {
            id:1,
            value:"Coffe Fireship",
            label:"Coffe Fireship",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:12000,
            stock:10,
            image:"Menu-coffe-1.webp",
            category:"Coffe"
        },
        {
            id:2,
            value:"Gud day fris anget",
            label:"Gud day fris anget",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:15000,
            stock:30,
            image:"Menu-coffe-2.webp",
            category:"Coffe"
        },
        {
            id:3,
            value:"Milkshake Chocholate",
            label:"Milkshake Chocholate",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:19000,
            stock:10,
            image:"Menu-milkshake-1.webp",
            category:"Ice"
        },
        {
            id:4,
            value:"Milkshake stroberi",
            label:"Milkshake Stroberry",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:18000,
            stock:17,
            image:"Menu-milkshake-2.webp",
            category:"Ice"
        },
        {
            id:5,
            value:"Donnut Pink",
            label:"Donnut Pink",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:15000,
            stock:29,
            image:"donat pink.webp",
            category:"Donnut"
        },
        {
            id:6,
            value:`Macam" Donnut`,
            label:`Macam" Donnut`,
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:15000,
            stock:28,
            image:"Menu-donnut-2.webp",
            category:"Donnut"
        },
        {
            id:7,
            value:"Frenc Fries",
            label:"Frenc Fries",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:13000,
            stock:19,
            image:"frenc fries.webp",
            category:"Snack"
        },
        {
            id:8,
            value:"Sandwich",
            label:"Sandwich",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, voluptates sequi hic dolorem ducimus inventore!",
            price:20000,
            stock:20,
            image:"sandwich.webp",
            category:"Snack"
        }

    ]

    const [menu, setMenu] = useState<any>(GetMenu)
    const [tab,setTab] = useState<string>("All")
    const filterCategory = (categItem:string)=>{
        setTab(categItem)
        const updateItems = GetMenu.filter((curElem)=>{
            return curElem.category == categItem
        })
        setMenu(updateItems)
    }
    const filterAll = ()=>{
        setTab('All Menu')
        setMenu(GetMenu)
    }
    

    const [selected, setSelected] =  useState<any>(null)
    useEffect(()=>{
        
    })


    const clock = Number(new Date().getHours());
    let welcome = ""

    if(clock < 10){
        welcome = "Good Morning !"
    }else if(clock >= 10 && clock <= 16 ) {
        welcome = "Good Evening !"
    }else if(clock > 16){
        welcome = "Good Afternoon !"
    }

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024); // Ukuran lg di Tailwind adalah 1024px
        };
        window.addEventListener('resize', handleResize);

        // Jalankan sekali untuk mendeteksi ukuran saat load pertama kali
        handleResize();

        // Cleanup event listener saat component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log(isSmallScreen);

    

    return (
        <>
            
            <div className="flex flex-col ">
                <Navbar/>

                <div className='lg:flex lg:flex-row bg-gray-50'>
                    <div className='lg:w-[250%]  lg:ml-[18%] lg:mt-10 sm:mt-20 px-2'>
                        {/* <div className='px-3 lg:w-[100%] mt-5'>
                            <p className='py-2.5 font-poppins font-semibold sm:text-xl '>Want Search ?</p>
                            <Select options={GetMenu}
                            placeholder={`Choose ur menu...`}
                            />
                        </div> */}
                        <div className='flex flex-row justify-between items-center'>
                            <label className=' pl-5 sm:text-xl text-cent font-fredoka'>Main Order's</label>
                            <a href="#" className='text-blue-500 font-fredoka cursor-pointer mr-20'>All Order's</a>
                        </div>
                        <div className='lg:w-[93%]'>
                            <div className='sm:flex sm:gap-5 lg:ml-5 lg:mt-5'>
                                <div className='border w-full h-[110px] p-3 rounded-md bg-white bg-red-300 flex flex-col sm:justify-between'>
                                        <div className='sm:flex sm:flex-row sm:justify-between'>
                                            <div className='sm:flex sm:flex-row sm:items-center sm:gap-2'>
                                                <VscArchive />
                                                <p className='font-fredoka text-md'>Meja 3</p>
                                            </div>
                                            <p className='font-fredoka'>4 Items</p>
                                        </div>
                                        <div className='flex flex-row gap-2 items-center font-fredoka py-2 mb-1 mt-3 border rounded-full bg-orange-500 text-white px-5 justify-between'>
                                            <p>Dalam progres</p>
                                            <RxCheckCircled size={20}/>
                                        </div>
                                </div>
                                <div className='border w-full h-[110px] p-3 rounded-md bg-white bg-red-300 flex flex-col sm:justify-between'>
                                        <div className='sm:flex sm:flex-row sm:justify-between'>
                                            <div className='sm:flex sm:flex-row sm:items-center sm:gap-2'>
                                                <VscArchive />
                                                <p className='font-fredoka text-md'>Meja 3</p>
                                            </div>
                                            <p className='font-fredoka'>4 Items</p>
                                        </div>
                                        <div className='flex flex-row gap-2 items-center font-fredoka py-2 mb-1 mt-3 border rounded-full bg-orange-500 text-white px-5 justify-between'>
                                            <p>Dalam progres</p>
                                            <RxCheckCircled size={20}/>
                                        </div>
                                </div>
                                <div className='border w-full h-[110px] p-3 rounded-md bg-white bg-red-300 flex flex-col sm:justify-between'>
                                        <div className='sm:flex sm:flex-row sm:justify-between'>
                                            <div className='sm:flex sm:flex-row sm:items-center sm:gap-2'>
                                                <VscArchive />
                                                <p className='font-fredoka text-md'>Meja 3</p>
                                            </div>
                                            <p className='font-fredoka'>4 Items</p>
                                        </div>
                                        <div className='flex flex-row gap-2 items-center font-fredoka py-2 mb-1 mt-3 border rounded-full bg-green-500 text-white px-5 justify-between'>
                                            <p>siap disajikan</p>
                                            <RxCheckCircled size={20}/>
                                        </div>
                                </div>
                                
                            </div>
                        </div>


                        <div className='mt-7'>
                            <label className=' pl-5 sm:text-xl text-cent font-fredoka'>Main Category</label>
                            <div className='sm:pl-24 md:px-12 w-full overflow-scroll snap-x no-scrollbar snap-mandatory overflow-y-hidden flex flex-row justify-center items-center sm:pt-3 sm:pb-7 gap-5'>
                                {/* <Category /> */}
                                <button 
                                    onClick={filterAll}
                                    className={`${tab =="All Menu" ? "bg-green-600 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex sm:flex-col lg:flex-row justify-center items-center lg:p-1 sm:px-5 gap-2 sm:h-[50px] lg:h-[40px] lg:w-[15%] shadow-lg`}>
                                        {/* <div className={`${tab =="All" ? "bg-white" : "bg-green-600"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                                            <Image 
                                                src={"/icon/menu-cards.svg"}
                                                width={32.5}
                                                height={20}
                                                alt="All"
                                                className=''
                                            />
                                        </div> */}
                                        <label htmlFor="" className={`${tab =="All Menu" ? "text-white text-lg" : ""} font-fredoka`}>All Menu</label>
                                    </button>

                                    <button 
                                        onClick={()=>filterCategory("Coffe")}
                                        className={`${tab =="Coffe" ? "bg-green-600 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex sm:flex-col lg:flex-row justify-center items-center lg:p-1 sm:p-3 gap-2 sm:h-[50px] lg:h-[40px] lg:w-[15%] shadow-lg`}>
                                            {/* <div className={`${tab =="Coffe" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                                                <Image 
                                                    src={"/icon/coffee.svg"}
                                                    width={20}
                                                    height={20}
                                                    alt="Coffe"
                                                    className=''
                                                />
                                        </div> */}
                                        <label htmlFor="" className={`${tab =="Coffe" ? "text-white text-lg" : ""} font-semibold `}>Coffe</label>
                                    </button>

                                    <button 
                                        onClick={()=>filterCategory("Ice")}
                                        className={`${tab =="Ice" ? "bg-green-600 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex sm:flex-col lg:flex-row justify-center items-center lg:p-1 sm:p-3 gap-2 sm:h-[50px] lg:h-[40px] lg:w-[15%] shadow-lg`}>
                                            {/* <div className={`${tab =="Coffe" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                                                <Image 
                                                    src={"/icon/coffee.svg"}
                                                    width={20}
                                                    height={20}
                                                    alt="Coffe"
                                                    className=''
                                                />
                                        </div> */}
                                        <label htmlFor="" className={`${tab =="Ice" ? "text-white text-lg" : ""} font-semibold `}>Ice</label>
                                    </button>

                                    

                                    <button 
                                        onClick={()=>filterCategory("Donnut")}
                                        className={`${tab =="Donnut" ? "bg-green-600 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex flex-col justify-center items-center p-3 gap-2 sm:h-[50px] lg:h-[40px] lg:w-[15%] shadow-lg`}>
                                            {/* <div className={`${tab =="Donnut" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full overflow-hidden flex justify-center items-center`}>
                                                <Image 
                                                    src={"/icon/food.svg"}
                                                    width={35}
                                                    height={20}
                                                    alt="Donut"
                                                    className=''
                                                />
                                        </div> */}
                                        <label htmlFor="" className={`${tab =="Donnut" ? "text-white text-lg" : ""} font-semibold `}>Donut</label>
                                    </button>

                                    <button
                                        onClick={()=>filterCategory("Snack")}
                                        className={`${tab =="Snack" ? "bg-green-600 scale-110" : "bg-white"} duration-200 transition-all border rounded-full flex flex-col justify-center items-center p-3 gap-2 sm:h-[50px]  lg:h-[40px] lg:w-[15%] shadow-lg`}>
                                            {/* <div className={`${tab =="Snack" ? "bg-white" : "bg-orange-300"} sm:-mt-5 sm:w-[52px] sm:h-[52px] border rounded-full bg-orange-300 overflow-hidden flex justify-center items-center`}>
                                                <Image 
                                                    src={"/icon/frech-fries.svg"}
                                                    width={32}
                                                    height={20}
                                                    alt="Coffe"
                                                    className=''
                                                />
                                        </div> */}
                                        <label htmlFor="" className={`${tab =="Snack" ? "text-white text-lg" : ""} font-semibold `}>Snack</label>
                                    </button>
                            </div>
                        </div>

                        
                        <div className='flex flex-col gap-5  pb-5'>
                            <label className='pl-5 text-xl font-fredoka'>{`${tab}`}</label>
                            <div className='flex flex-wrap flex-row w-full sm:gap-x-3 sm:gap-y-4 md:gap-x-6 md:gap-y-5 justify-start items-center sm:px-5'>
                                {getMenu.map((MenuList : MenuListTypes, Index:number)=>{
                                        return(
                                            <div 
                                            onClick={isSmallScreen ? () => setSelected(MenuList) : undefined}
                                            key={Index} 
                                            className='relative sm:w-[48%] sm:h-[250px] lg:w-[30%] lg:h-[400px] border rounded-lg overflow-hidden'>
                                                                            <Image 
                                                                            src={`http://localhost:8000/storage/${MenuList.photo_menu}`}
                                                                            width={200}
                                                                            height={180}
                                                                            alt={MenuList.menu_name}
                                                                            className="md:w-[100%] -mt-20"
                                                                            />
                                                                            <label className='absolute font-montserrat sm:text-xl sm:bottom-3 lg:bottom-14 sm:left-5 text-white'>{MenuList.menu_name}</label>
                                                                            <span className='absolute font-montserrat sm:text-xs sm:top-3 sm:right-5 rounded-full bg-white p-2 px-5'>{`IDR ${MenuList.price/1000}K`}</span>
                                                                            <div className='sm:hidden lg:block'>
                                                                                <div className=' absolute bottom-3 lg:flex lg:flex-row gap-2 justify-center items-center bg-gray-100 p-[0.12rem] lg:left-3 rounded-full'>
                                                                                    <button className='font-fredoka border-2 bg-slate-50 hover:bg-green-500 hover:text-white hover:scale-110 rounded-full px-3 py-1 right-0 '>-</button>
                                                                                    <p className='font-fredoka'>3</p>
                                                                                    <button className='font-fredoka border-2 bg-slate-50 hover:bg-green-500 hover:text-white rounded-full hover:scale-110 duration-200 lg:px-3 lg:py-1 left-0 '>+</button>
                                                                                </div>
                                                                                <button className='absolute bottom-3 right-3 font-fredoka lg:border lg:py-[5px] lg:w-[100px] rounded-full bg-green-600 hover:bg-green-700 text-white w-2/3 hover:scale-110 duration-200'>Buy</button>
                                                                            </div>

                                            </div>
                                        )
                                    })}
                            

                                <div className='lg:flex lg:flex-col border rounded-lg lg:p-5 lg:w-[50%] shadow-md'>
                                    <div className='sm:none lg:flex lg:gap-7'>
                                        <div className='rounded-md'>
                                            <Image 
                                            src={`/image/Menu-coffe-1.webp`}
                                            width={200}
                                            height={200}
                                            alt={'testing'}
                                            className="rounded-lg lg:w-[120%] lg:h-[100%]"
                                            />
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:gap-5'>
                                            <div className='flex flex-row gap-7 font-fredoka justify-between'>
                                                <p>Cappucino</p>
                                                <p>Rp 12.000</p>
                                            </div>
                                            <div>
                                                <p className='font-fredoka'>Lorem ipsum dolor, sit amet consectetur  Rem consequuntur aperiam illum cumque laudantium </p>
                                            </div>
                                            <div className='flex gap-2'>
                                                <button className='font-fredoka lg:border lg:p-1 px-5 rounded-full hover:bg-green-600 hover:text-white w-[70px] text-sm'>Small</button>
                                                <button className='font-fredoka lg:border lg:p-1 px-5 rounded-full hover:bg-green-600 hover:text-white w-[70px] text-sm'>Medium</button>
                                                <button className='font-fredoka lg:border lg:p-1 px-5 rounded-full hover:bg-green-600 hover:text-white w-[70px] text-sm'>Large</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3 lg:flex lg:flex-row ml-2'>
                                        <div className='lg:flex lg:flex-row gap-2 justify-center items-center'>
                                            <button className='font-fredoka border-2 rounded-full px-3 py-1'>+</button>
                                            <p className='font-fredoka'>3</p>
                                            <button className='font-fredoka border-2 rounded-full px-3 py-1'>-</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='relative sm:w-[48%] sm:h-[220px] border rounded-lg overflow-hidden' onClick ={()=>setSelected("hi...")}>
                                    <Image 
                                    src={"/image/Menu-coffe-2.webp"}
                                    width={177}
                                    height={180}
                                    alt={"Menu Coffe 1"}
                                    className=""
                                    />
                                    <label className='absolute font-montserrat sm:text-xl sm:bottom-3 sm:left-3 text-white'>{"Gud Day Fris Anget"}</label>
                                    <span className='absolute font-montserrat sm:text-xs sm:top-2 sm:right-2 rounded-full bg-white p-2'>{"IDR 12K"}</span>
                                </div>
                                
                                <div className='relative sm:w-[48%] sm:h-[220px] border rounded-lg overflow-hidden'>
                                    <Image 
                                    src={"/image/Menu-coffe-2.webp"}
                                    width={177}
                                    height={180}
                                    alt={"Menu Coffe 1"}
                                    className=""
                                    />
                                    <label className='absolute font-montserrat sm:text-xl sm:bottom-3 sm:left-3 text-white'>{"Gud Day Fris Anget"}</label>
                                    <span className='absolute font-montserrat sm:text-xs sm:top-2 sm:right-2 rounded-full bg-white p-2'>{"IDR 12K"}</span>
                                </div>

                                <div className='relative sm:w-[48%] sm:h-[220px] border rounded-lg overflow-hidden'>
                                    <Image 
                                    src={"/image/Menu-coffe-2.webp"}
                                    width={177}
                                    height={180}
                                    alt={"Menu Coffe 1"}
                                    className=""
                                    />
                                    <label className='absolute font-montserrat sm:text-xl sm:bottom-3 sm:left-3 text-white'>{"Gud Day Fris Anget"}</label>
                                    <span className='absolute font-montserrat sm:text-xs sm:top-2 sm:right-2 rounded-full bg-white p-2'>{"IDR 12K"}</span>
                                </div>

                                <div className='relative sm:w-[48%] sm:h-[220px] border rounded-lg overflow-hidden'>
                                    <Image 
                                    src={"/image/Menu-coffe-2.webp"}
                                    width={177}
                                    height={180}
                                    alt={"Menu Coffe 1"}
                                    className=""
                                    />
                                    <label className='absolute font-montserrat sm:text-xl sm:bottom-3 sm:left-3 text-white'>{"Gud Day Fris Anget"}</label>
                                    <span className='absolute font-montserrat sm:text-xs sm:top-2 sm:right-2 rounded-full bg-white p-2'>{"IDR 12K"}</span>
                                </div> */}
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='sm:hidden lg:block lg:w-full mt-10 px-2 '>
                        <div className='fixed border lg:w-[22%] lg:h-[95%] shadow-sm rounded-xl bg-white px-8'>
                            <div className='py-5 flex flex-col justify-between'>
                                <p className='font-fredoka text-2xl text-center'>Order's <span className='text-green-600'>Summary</span></p>  
                            </div>
                            {/* <div className='sm:my-3 sm:flex sm:flex-row sm:justify-between'>
                                        <p className='sm:font-fredoka'>Nomor meja:</p>
                                        <div>
                                            <input
                                                type="number"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="masukan nomor meja..."
                                            />
                                            <p className='text-sm  mt-2 font-fredoka '>Contoh: <span className='text-blue-500'>3</span></p>
                                        </div>
                                    </div>
                             */}
                            <div className='lg:flex lg:flex-col border bg-gray-50 rounded-lg h-[75%] overflow-auto items-center'>
                            <div>
                            <div className='mt-5 px-3'>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20} />
                                </div>
                                <div className='sm:flex sm:flex-row sm:mt-2 sm:gap-3 '>
                                    <div className='sm:border sm:w-[28%] sm:h-[100px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/donat pink.webp"} className='-mt-7' height={0} width={85} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Donnut</p>

                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka text-sm'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                    <button className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>-</button>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <button className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:justify-between'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] h-[80%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="masukan note pesanan..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />

                            <div className='mt-3 px-3'>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20} />
                                </div>
                                <div className='sm:flex sm:flex-row sm:mt-2 sm:gap-3 '>
                                <div className='sm:border sm:w-[28%] sm:h-[100px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/Menu-coffe-1.webp"} className='-mt-7' height={0} width={140} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Kentang Goreng</p>
                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                <button className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>-</button>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <button className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:justify-between'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] h-[80%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="masukan note pesanan..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />

                            <div className='mt-3 px-3'>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20} />
                                </div>
                                <div className='sm:flex sm:flex-row sm:mt-2 sm:gap-3 '>
                                <div className='sm:border sm:w-[28%] sm:h-[100px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/frenc fries.webp"} className='-mt-7' height={0} width={140} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Kentang Goreng</p>
                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                <button className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>-</button>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <button className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:justify-between'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] h-[80%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="masukan note pesanan..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />

                            <div className='mt-3 px-3'>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20} />
                                </div>
                                <div className='sm:flex sm:flex-row sm:mt-2 sm:gap-3 '>
                                <div className='sm:border sm:w-[28%] sm:h-[100px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/frenc fries.webp"} className='-mt-7' height={0} width={140} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Kentang Goreng</p>
                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                <button className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>-</button>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <button className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:justify-between'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] h-[80%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="masukan note pesanan..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />

                            <div className='mt-3 px-3'>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20} />
                                </div>
                                <div className='sm:flex sm:flex-row sm:mt-2 sm:gap-3 '>
                                <div className='sm:border sm:w-[28%] sm:h-[100px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/frenc fries.webp"} className='-mt-7' height={0} width={140} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Kentang Goreng</p>
                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                <button className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>-</button>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <button className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:justify-between'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] h-[80%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="masukan note pesanan..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />

                            <div className='mt-3 px-3'>
                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                    <p className='sm:font-fredoka sm:text-md'>08:30 WIB</p>
                                    <VscChromeClose size={20} />
                                </div>
                                <div className='sm:flex sm:flex-row sm:mt-2 sm:gap-3 '>
                                <div className='sm:border sm:w-[28%] sm:h-[100px] sm:rounded-lg sm:overflow-hidden '>
                                        <Image src={"/image/frenc fries.webp"} className='-mt-7' height={0} width={140} alt={"Nama pesanan"}/>
                                    </div>
                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                        <p className='sm:font-fredoka sm:text-lg'>Kentang Goreng</p>
                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                            <p className='sm:font-fredoka'>Rp 12.000</p>
                                            <div className=''>
                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                <button className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>-</button>
                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'>2</p>
                                                    <button className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:justify-between'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] h-[80%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="masukan note pesanan..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>

                                {/* <p className='text-center font-fredoka text-gray-500'>Belum ada pesanan...</p> */}
                            </div>
                            
                            <div className=''>
                                
                                {/* <div className='pb-2 mt-5'>
                                <div className='sm:flex sm:flex-row sm:items-center sm:gap-3 my-5 justify-center'>
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
                                    <div className=' sm:flex sm:flex-row sm:justify-between sm:text-lg sm:pt-5'>
                                        <p className='sm:font-fredoka'>Total Bayar:</p>
                                        <p className='sm:font-fredoka'>Rp 22.562.5</p>
                                    </div>
                                </div>
                            </div> */}

                                <div className='lg:flex lg:flex-col justify-center items-center mt-5'>
                                    <div className='lg:flex items-center w-full justify-between'>
                                        <p>Total bayar:</p>
                                        <p>Rp. 12.000</p>
                                    </div>
                                    <button className='font-fredoka lg:border lg:py-3 px-3 rounded-full bg-green-600 hover:bg-green-800 text-white w-full active:scale-110 duration-200'>Pay</button>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    
                </div>

                    <Modal selected={selected} setSelected={setSelected} />
                
                {/* <Footer /> */}
            </div>

            <div>
                
            </div>

        </>
    )
}
