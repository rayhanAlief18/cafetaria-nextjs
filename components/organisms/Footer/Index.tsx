import { AiOutlineHome } from "react-icons/ai";
import { BsMenuButtonWide } from "react-icons/bs";
import style from './Footer.module.css'
export default function Index() {
    return (
        
<footer className={`md:none rounded-t-xl sm:fixed bottom-0 w-full shadow bg-green-400 sm:py-2 md:py-0 ${style.hidden}`}>
    <div className="w-full container mx-auto p-2 md:px-6 md:py-8">
        <div className="flex justify-around items-center">
            <div className="flex justify-center items-center flex-col text-white">
                <AiOutlineHome color="white" size={"2em"}/>
                <p>Home</p>
            </div>
            <div className="flex justify-center items-center flex-col ">
                <BsMenuButtonWide color="" size={"2em"} />
                
            </div>
            <div className="flex justify-center items-center flex-col ">
                <BsMenuButtonWide color="" size={"2em"} />
                
            </div>
            
        </div>
    </div>
</footer>


    )
}
