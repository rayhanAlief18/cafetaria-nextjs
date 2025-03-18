import axios from 'axios';
import Image from 'next/image';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { RxCheckCircled } from "react-icons/rx";
import { VscArchive, VscChromeClose } from "react-icons/vsc";
import { toast } from "react-toastify";
import { getUserLogin } from '../utils/auth/getUserLogin';
import api from '../utils/axios/axiosConfig';
import Navbar from '../components/organisms/Navbar/Index';
import Modal from '../components/organisms/Menu/Modal/Index';

// interface
import { responseCart } from '../utils/interface/responseCart';
import { userLoginTypes } from '../utils/interface/userLogin';
import { MenuListTypes } from '../utils/types/DataTypes';
import { GetStaticProps } from 'next';

//rupiah


export default function Menu({menus, userProps}:{menus:MenuListTypes,userProps:userLoginTypes}) {
     //User
     const [user, setUser] = useState({
        id:"",
        name:"",
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        photo:"",
        role:"",
    });
//end user

        useEffect(()=>{
        const getUserLogin = async ()=>{
            try{
                const response = await api.get("/api/users");
                console.log("response")
                console.log(response.data)
                setUser({
                    id:response.data.id,
                    name:response.data.name,
                    first_name:response.data.first_name,
                    last_name:response.data.last_name,
                    email:response.data.email,
                    phone:response.data.phone,
                    photo:response.data.photo,
                    role:response.data.role,
                })

                const fetchCart = async ()=>{
                    try {
                        const responseCart = await api.get(`api/getCart/${response.data.id}}`);
                        setFetchCart(responseCart.data.data);
                    } catch (error:any) {
                        toast.error("Kesalahan tak terduga terjadi.",error);
                    }
                };
                fetchCart();

                console.log("user")
                console.log(user)
            }catch (err:any){
                console.error("Fetch User Error:", err.response?.data || err.message);
                return null;
            }
        }
        getUserLogin();
    },[])

    const formatRupiah = (angka: number) => {
        return `Rp${angka.toLocaleString("id-ID")}`;
    };

    //Menu
        const [getMenu,getSetMenu] = useState(menus);
    //end Menu

   
        
    //Keranjang
        const addToCartHandle = async  (userId:string, MenuId : number, price: number) =>{
            const checkChart = quantity[MenuId] || 0
            if(checkChart < 1){
                toast.error("Silahkan pilih jumlah terlebih dahulu")
            }

            console.log("quantity");
            console.log(quantity[MenuId]);

            const cartData = {
                user_id : Number(user.id),
                menu_id : MenuId,
                jumlah : quantity,
                catatan: '-',
                date: new Date().toISOString().slice(0, 19).replace("T", " "),
            }

            try{
                const response = await api.post('/api/addCart',{
                    user_id : userId,
                    menu_id : MenuId,
                    jumlah : quantity[MenuId],
                    catatan: '-',
                    date_time: new Date().toISOString().slice(0, 19).replace("T", " "),  
                },{
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        // "X-XSRF-TOKEN": csrfToken
                    },
                    withXSRFToken:true,
                });
                Router.reload();
                toast.success("Menu berhasil masuk keranjang")
                // Update state agar UI langsung berubah
                setFetchCart(prevItems => [...prevItems, response.data.data]);

            }catch(err:any){
                console.log(err)
                toast.error(err)
            }
        }
        
        const [fetchCart, setFetchCart] = useState<responseCart[]>([]);

        const deleteCart = (id:number)=>{
            try{
                const deleteCart = api.delete(`/api/deleteCart/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        // "X-XSRF-TOKEN": csrfToken
                    },
                    withXSRFToken:true,
                });
                setFetchCart(prevItems => prevItems.filter(item => item.id !== id)); // Hapus dari state
                toast.success("Pesanan berhasil dihapus!")
            }catch(err:any){
                console.log(err)
                toast.error(err)
            }
        }

        //end Keranjang
        
        //quantity menu
        const [quantity, setQuantity] = useState<{[key:number]:number}>({});
    
        const increment = (id:number) => {
            setQuantity((jumlahPesanan) =>({
                ...jumlahPesanan, [id]: (jumlahPesanan[id] || 0) + 1
            }))
        };
        
        const decrement = (id:number) => {
            setQuantity((jumlahPesanan) =>({
                ...jumlahPesanan,[id]:Math.max((jumlahPesanan[id] || 0) - 1, 0),
            }));
        };
    // end quantity
    
    //quantity cart
    const [selected, setSelected] =  useState<any>(null)
    useEffect(()=>{
        
    })

    const [isSmallScreen, setIsSmallScreen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024); // Ukuran lg di Tailwind adalah 1024px
        };
        window.addEventListener('resize', handleResize);

        // Jalankan sekali untuk mendeteksi ukuran saat load pertama kali
        handleResize();

        // Cleanup event listener saat component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [user]);
    console.log(isSmallScreen);

    return (
        <>
            <div className="flex flex-col ">
                <Navbar/>
                <div className='lg:flex lg:flex-row bg-gray-50'>
                    <div className='lg:w-[250%]  lg:ml-[18%] lg:mt-10 sm:mt-20 px-2'>
                        <div className='flex flex-row justify-between items-center'>
                            <label className=' pl-5 sm:text-xl text-cent font-fredoka'>Main Orders</label>
                            <a href="#" className='text-blue-500 font-fredoka cursor-pointer mr-20'>All Orders</a>
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

                        
                        <div className='flex flex-col gap-5  pb-5'>
                            <label className='pl-5 text-xl font-fredoka'>Menu</label>
                            <div className='flex flex-wrap flex-row w-full sm:gap-x-3 sm:gap-y-4 md:gap-x-6 md:gap-y-5 justify-start items-center sm:px-5'>
                                {getMenu.map((MenuList : MenuListTypes, Index:number)=>{
                                        return(
                                            <div 
                                            onClick={isSmallScreen ? () => setSelected(MenuList) : undefined}
                                            key={Index} 
                                            className='relative sm:w-[48%] sm:h-[250px] lg:w-[30%] lg:h-[400px] border rounded-lg overflow-hidden font-fredoka'>
                                                                            <Image 
                                                                            src={`http://localhost:8000/storage/${MenuList.photo_menu}`}
                                                                            width={200}
                                                                            height={180}
                                                                            alt={MenuList.menu_name}
                                                                            className="md:w-[100%] -mt-20"
                                                                            />
                                                                            <label className='absolute font-montserrat sm:text-xl sm:bottom-3 lg:bottom-14 sm:left-5 text-white font-fredoka'>{`${MenuList.menu_name}`}</label>
                                                                            <span className='absolute font-montserrat sm:text-xs sm:top-3 sm:right-5 rounded-full bg-white p-2 px-5 font-fredoka'>{`IDR ${MenuList.price/1000}K`}</span>
                                                                            <div className=''>
                                                                                <form action="" className=''>
                                                                                    <div className='lg:max-w-[40%] bg-white absolute bottom-20'>
                                                                                        <label htmlFor="">user id</label>
                                                                                        <input type="text" className='' defaultValue={`${user?.id ?? "user tidak diketahui"}`} readOnly name='' placeholder='user id' />
                                                                                        <label htmlFor="">Menu</label>
                                                                                        <input type="text" name='' placeholder='menu' defaultValue={`${MenuList.menu_name}`} readOnly/>
                                                                                        <label htmlFor="">Jumlah</label>
                                                                                        <input type="number" name='' defaultValue={quantity[MenuList.id] || 0} readOnly placeholder='jumlah' />
                                                                                        <label htmlFor="">tanggal</label>
                                                                                        <input type="text" name='' placeholder='tanggal' defaultValue={new Date().toISOString().slice(0, 19).replace("T", " ")} readOnly />
                                                                                        <label htmlFor="">catatan</label>
                                                                                        <input type="text" name='' placeholder='catatan' />
                                                                                        <label htmlFor="">total harga</label>
                                                                                        <input type="number" name='' placeholder='total harga' defaultValue={MenuList.price * quantity[MenuList.id || 0]}/>
                                                                                    </div>
                                                                                    <div className=' absolute bottom-3 lg:flex lg:w-[28%] lg:flex-row gap-2 justify-center items-center bg-gray-100 p-[0.12rem] lg:left-3 rounded-full'>
                                                                                        <div 
                                                                                        onClick={()=>decrement(MenuList.id)}
                                                                                        className='cursor-pointer font-fredoka border-2 bg-slate-50 hover:bg-green-500 hover:text-white focus:scale-110 rounded-full px-3 py-1 right-0 '>-</div>

                                                                                        <p className='font-fredoka'>{quantity[MenuList.id] || 0}</p>

                                                                                        <div
                                                                                        onClick={()=>increment(MenuList.id)}
                                                                                        className='cursor-pointer font-fredoka border-2 bg-slate-50 hover:bg-green-500 hover:text-white rounded-full focus:scale-110 duration-200 lg:px-3 lg:py-1 left-0 '>+</div>
                                                                                    </div>
                                                                                    <div
                                                                                        onClick={() => addToCartHandle(user.id, MenuList.id, MenuList.price)}
                                                                                        className='absolute cursor-pointer text-center bottom-3 right-3 font-fredoka lg:border lg:py-[5px] lg:w-[100px] rounded-full bg-green-500 focus:outline-green-800 hover:bg-green-600 text-white w-2/3 hover:scale-110 duration-200'>
                                                                                            Buy
                                                                                    </div>
                                                                                    <div className=' flex flex-row gap-2 items-center font-fredoka py-2 mb-1 mt-3 border rounded-full bg-green-500 text-white px-5 justify-between'>
                                                                                        <p>siap disajikan</p>
                                                                                        <RxCheckCircled size={20}/>
                                                                                    </div>
                                                                                </form>
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
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className='sm:hidden lg:block lg:w-full mt-10 px-2 '>
                        <div className='fixed border lg:w-[22%] lg:h-[95%] shadow-sm rounded-xl bg-white px-8'>
                            <div className='py-5 flex flex-col justify-between'>
                                <p className='font-fredoka text-2xl text-center'>Orders <span className='text-green-600'>Summary</span></p>  
                            </div>
                            <div className='sm:my-3 sm:flex sm:flex-row sm:justify-between'>
                                        <p className='sm:font-fredoka'>Atas nama:</p>
                                        <div>
                                            <input
                                                type="number"
                                                id="name"
                                                name="name"
                                                className="text-center w-[100%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="nama pemesan..."
                                            />
                                            <p className='text-sm  mt-2 font-fredoka '>Contoh: <span className='text-blue-500'>rayhan</span></p>
                                        </div>
                                    </div>
                            
                            <div className='lg:flex lg:flex-col border bg-gray-50 rounded-lg h-[70%] overflow-auto items-center'>
                            
                            {fetchCart.length == 0? (
                                <p className='flex items-center justify-center text-center w-full h-screen font-fredoka text-gray-500'>Belum ada pesanan...</p>
                            ): (
                                fetchCart.map((cartList : responseCart, index:number)=>{

                                    console.log(`Cart Item ${cartList.id}:`, cartList);
                                    console.log(`Menu Data:`, cartList.menu); // Debug menu
                                    return(
                                    <div key={index}>
                                            <div className='mt-5 px-3'>
                                                <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                                    <p className='sm:font-fredoka sm:text-md'>{new Date(cartList.date_time).toLocaleTimeString("id-ID", { hour12: false })} : WIB</p>
                                                        <VscChromeClose size={20} onClick={()=>deleteCart(cartList.id)} className="cursor-pointer"/>
                                                </div>
                                                <div className='sm:flex sm:flex-row sm:mt-2 sm:gap-3 '>
                                                    <div className='sm:border sm:w-[28%] sm:h-[100px] sm:rounded-lg sm:overflow-hidden '>
                                                        <Image src={`http://localhost:8000/storage/${cartList.menu?.photo_menu}`} className='-mt-7 w-full' height={0} width={97} alt={"Nama pesanan"}/>
                                                    </div>
                                                    <div className='sm:flex sm:flex-col sm:justify-around sm:gap-3 sm:w-[60%]'>
                                                        <p className='sm:font-fredoka sm:text-lg'>{cartList.menu?.menu_name}</p>
    
                                                        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center'>
                                                            <p className='sm:font-fredoka text-sm'>{formatRupiah(cartList.total_harga)}</p>
                                                            <div className=''>
                                                                <div className='sm:flex sm:flex-row sm:justify-around sm:items-center sm:border sm:rounded-xl sm:w-[100px] sm:h-[25px] sm:overflow-hidden'>
                                                                    <button 
                                                                    className='bg-red-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>-</button>
                                                                    <p className='sm:w-[33.33333%] text-center sm:font-fredoka'> {cartList.jumlah}</p>
                                                                    <button 
                                                                    className='bg-green-600 sm:w-[33.33333%] text-center text-white sm:font-fredoka active:scale-110 cursor-pointer duration-300'>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='lg:flex lg:flex-col lg:justify-between'>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                className="text-center w-[100%] h-[80%] text-sm px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                                placeholder="catatan pesanan..."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <hr className='mt-3' />
                                </div>
                                )})
                            )}
                            </div>
                            
                            <button className='mt-20 font-fredoka lg:border lg:py-3 px-3 rounded-full bg-green-600 hover:bg-green-800 text-white w-full active:scale-110 duration-200'>Pay</button>
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

export const getStaticProps: GetStaticProps = async ()=>{
    try{
        const response = await api.get('api/menu');
        const menus = response.data.data;

        console.log("ini menus");
        console.log(menus);

        return{
            props:{
                menus,
            },
            revalidate:86400
        };
    }catch(error ){
        console.log("error Fetch Menu");
        console.log(error);

        return{
          props:{
            menus:[],
          },
        }
    }
}
