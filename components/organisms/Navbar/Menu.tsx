import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VscHome, VscBookmark, VscBook, VscChromeClose } from "react-icons/vsc";
import { toast } from "react-toastify";
import Router, { useRouter } from "next/router";


export default function Menu() {
  const router = useRouter();
  const handleLogout = ()=>{
      localStorage.removeItem('token')
      toast.success('Anda berhasil Logout')
    setTimeout(()=>{
      router.push('login');
    },1000)
  }
  return (
    <>
      <li className="cursor-pointer duration-200 group lg:hover:bg-green-600 lg:hover:text-white lg:hover:border lg:hover:rounded-lg py-3 px-10 w-full rounded-lg Smb-3 ">
        <Link
          href={`/`}
          className=" flex gap-2 items-center cursor-pointer"
        >
          <VscHome size={23} className="group-hover:text-white text-green-600" />
          <label className="mt-1 font-fredoka">Home Page</label>
        </Link>
      </li>
      <li className="cursor-pointer duration-200 group lg:hover:bg-green-600 lg:hover:text-white lg:hover:border lg:hover:rounded-lg py-3 px-10 w-full rounded-lg Smb-3 ">
        <Link
          href={`/Menu`}
          className="flex gap-2 items-center cursor-pointer"
        >
          <VscBook size={23} className="group-hover:text-white text-green-600" />
          <label className="mt-1 font-fredoka">Menu</label>
        </Link>
      </li>
      <li className="cursor-pointer duration-200 group lg:hover:bg-green-600 lg:hover:text-white lg:hover:border lg:hover:rounded-lg py-3 px-10 w-full rounded-lg Smb-3 ">
        <Link
          href={``}
          className="flex gap-2 items-center cursor-pointer"
        >
          <VscBookmark size={23} className="group-hover:text-white text-green-600" />
          <label className="mt-1 font-fredoka">My Orders</label>
        </Link>
      </li>
      <li className="cursor-pointer duration-200 group lg:hover:bg-green-600 lg:hover:text-white lg:hover:border lg:hover:rounded-lg py-3 px-10 w-full rounded-lg Smb-3"
      onClick={handleLogout}
      >
        <Link
          href={``}
          className="flex gap-2 items-center cursor-pointer"
        >
          <VscChromeClose size={23} className="group-hover:text-white text-green-600" />
          <label className="mt-1 font-fredoka">Logout</label>
        </Link>
      </li>
      
    </>
  );
}
