import { useContext } from "react";
import MusicContextStore from "../store/music_app-store";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Player =({songInfo})=>
{
    const {isPlaying,handleOnPause,handleOnPlay,setArrow} = useContext(MusicContextStore);
    return (
        <div className='w-full md:w-[65%] h-25 bg-white fixed bottom-6 md:bottom-0 rounded-t-[30px] shadow-lg pt-2.5 pb-6.25 md:p-4 flex flex-row items-center hover:bg-gray-200 '>
            <Link to={"/"} className="flex justify-start items-start gap-5 w-[80%] h-full cursor-pointer overflow-hidden  pl-8.75 md:p-0"
            onClick={()=>setArrow(false)}>
                <div className="flex justify-start items-start gap-5 w-[80%] h-full cursor-pointer overflow-hidden  pl-8.75 md:p-0">
                    <div>
                        <img src={songInfo.image} alt="" className='max-h-15 w-15  md:min-h-17 md:w-17 rounded-lg shrink-0'/>
                    </div>
                    <div className=' text-[15px] md:text-[20px]'>
                        <div className='text-black text-[1.2em] font-semibold '>{songInfo.name}</div>
                        <div className='text-gray-800 text-[0.7em] font-semibold '>{songInfo.singer}</div>
                    </div>
                </div>
            </Link>
            <div className="w-[20%] flex justify-center items-center ">
                {isPlaying?
                <div className='h-12.5 w-12.5 rounded-full flex justify-center items-center bg-black text-white text-[25px] hover:bg-gray-600 transition-all cursor-pointer'
                onClick={handleOnPause}>
                    <FaPause  className="transition-all"/>
                </div>:
                <div className='h-12.5 w-12.5 rounded-full flex justify-center items-center bg-black text-white pl-1 text-[20px] hover:bg-gray-600 transition-all-ease cursor-pointer'
                onClick={handleOnPlay}>
                    <FaPlay className="transition-all"/>
                </div>}
            </div>
        </div>
    )
}
export default Player;