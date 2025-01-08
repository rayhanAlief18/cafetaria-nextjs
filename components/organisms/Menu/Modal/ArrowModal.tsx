import React from 'react'
import { MdOutlineArrowBack } from "react-icons/md";

export default function ArrowModal({setSelected}:any) {
    return (
        <div>
            <MdOutlineArrowBack
                            onClick={()=>setSelected(null)}
                            size={"50px"}
                            className=' text-white'/>
        </div>
    )
    }
