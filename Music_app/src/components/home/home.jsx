import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import MusicContextStore from "../../store/music_app-store";
import Card from "../card";
import { songsData } from "../../../songs";
import Player from "../player";

const Home = ()=>
{
    

    const {audioRef,handleOnPlay,handleOnPause,next,pre,isPlaying,songInfo,handleOnRange,arrow,setArrow} = useContext(MusicContextStore)
    const [range,setRange] = useState(0);
    
    const progress = useRef(null);

    useEffect(()=>
    {
        const updateProgress = ()=>
        {
            let duration = audioRef.current.duration || 0
            let currentTime = audioRef.current.currentTime||0
            let progressPrecentage = (currentTime/duration)*100||0
            setRange(progressPrecentage);
            if(progress.current)
            {
                progress.current.style.width = `${progressPrecentage}%`
            }
        }
        audioRef.current.addEventListener("timeupdate",updateProgress);
    },[range]);
    const handleRange =(e)=>
    {
        let x = e.clientX-104;
        let xf = 210;
        let per = (x/xf)*100;
        setRange(per);
        handleOnRange(per)
    }
    
    return (
       <div className='w-full h-screen bg-black flex relative overflow-hidden'>
            {arrow?<MdKeyboardArrowDown  className="text-white absolute top-[5%] left-[10%] text-[30px] md:hidden  transition-all rotate-180 cursor-pointer"
            onClick={()=>setArrow(prev=>!prev)}/>:
            <MdKeyboardArrowDown  className="text-white absolute top-[5%] left-[10%] text-[30px] md:hidden  transition-all cursor-pointer"
            onClick={()=>setArrow(prev=>!prev)}/>}

            <div className="w-full md:w-[50%] h-full md:flex md:justify-start justify-center items-center md:pt-30 flex-col md:gap-7.5 gap-7 hidden">

                <h1 className="text-white font-semibold text-[20px] ">Now Playing</h1>

                <div className="md:w-62.5 md:h-62.5 w-75 h-75 object-fill rounded-md overflow-hidden flex justify-center items-center relative">
                    <img src={songInfo.image} alt="song image" className="w-full h-full"/>
                    {isPlaying?<div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center '>
                        <img src="/images/musicanim.webp" alt="" className="w-[50%]"/>
                    </div>:""}
                </div>
                <div className='text-white text-[30px] font-bold text-center '>
                    {songInfo.name}
                </div>
                <div className="text-gray-500 font-medium text-center">
                    {songInfo.singer}
                </div>

                <div className='w-[50%] flex justify-center items-center relative'>
                    <input type="range" value={range}
                    className='player-range appearance-none w-full h-1.5 rounded-md bg-gray-500 cursor-pointer'
                    onChange={(e)=>{handleOnRange(e.target.value)}}/>
                    <div className= 'bg-white h-full absolute left-0 rounded-md cursor-pointer'
                    onClick={handleRange} 
                    ref={progress}></div>
                </div>
                <div className='text-white flex justify-center items-center gap-7.5'>
                    <TbPlayerTrackPrevFilled className="hover:text-gray-600 transition-all cursor-pointer"
                    onClick={pre}/>

                    {isPlaying?
                    <div className='h-12.5 w-12.5 rounded-full flex justify-center items-center bg-white text-black text-[25px] hover:bg-gray-600 transition-all cursor-pointer'
                    onClick={handleOnPause}>
                        <FaPause  className="transition-all"/>
                    </div>:
                    <div className='h-12.5 w-12.5 rounded-full flex justify-center items-center bg-white text-black pl-1 text-[20px] hover:bg-gray-600 transition-all-ease cursor-pointer'
                    onClick={handleOnPlay}>
                        <FaPlay className="transition-all"/>
                    </div>}
                    <TbPlayerTrackNextFilled className="hover:text-gray-600 transition-all cursor-pointer"
                    onClick={next}/>
                </div>
            </div>
            <div className="w-[50%] h-full  justify-start items-center pt-30 flex-col hidden md:flex gap-5 overflow-auto no-scrollbar pb-5 ">
                {songsData.map((song)=>
                    (<Card key={song.id} song={song}/>)
                )}
            </div>
            {!arrow?
            <div className="w-full md:w-[50%] h-full flex md:justify-start justify-center items-center md:pt-30 flex-col md:gap-7.5 gap-7 md:hidden transition-all">

                <h1 className="text-white font-semibold text-[20px] ">Now Playing</h1>

                <div className="md:w-62.5 md:h-62.5 w-75 h-75 object-fill rounded-md overflow-hidden flex justify-center items-center relative">
                    <img src={songInfo.image} alt="song image" className="w-full h-full"/>
                    {isPlaying?<div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center '>
                        <img src="/images/musicanim.webp" alt="" className="w-[50%]"/>
                    </div>:""}
                </div>
                <div className='text-white text-[30px] font-bold text-center '>
                    {songInfo.name}
                </div>
                <div className="text-gray-500 font-medium text-center">
                    {songInfo.singer}
                </div>

                <div className='w-[50%] flex justify-center items-center relative'>
                    <input type="range" value={range}
                    className='player-range appearance-none w-full h-1.5 rounded-md bg-gray-500 cursor-pointer'
                    onChange={(e)=>{handleOnRange(e.target.value)}}/>
                    <div className= 'bg-white h-full absolute left-0 rounded-md cursor-pointer'
                    onClick={handleRange} 
                    ref={progress}></div>
                </div>
                <div className='text-white flex justify-center items-center gap-7.5'>
                    <TbPlayerTrackPrevFilled className="hover:text-gray-600 transition-all cursor-pointer"
                    onClick={pre}/>

                    {isPlaying?
                    <div className='h-12.5 w-12.5 rounded-full flex justify-center items-center bg-white text-black text-[25px] hover:bg-gray-600 transition-all cursor-pointer'
                    onClick={handleOnPause}>
                        <FaPause  className="transition-all"/>
                    </div>:
                    <div className='h-12.5 w-12.5 rounded-full flex justify-center items-center bg-white text-black pl-1 text-[20px] hover:bg-gray-600 transition-all-ease cursor-pointer'
                    onClick={handleOnPlay}>
                        <FaPlay className="transition-all"/>
                    </div>}
                    <TbPlayerTrackNextFilled className="hover:text-gray-600 transition-all cursor-pointer"
                    onClick={next}/>
                </div>
            </div>:
            <div className="w-full h-[80%] flex justify-start items-center mt-20 flex-col gap-5 overflow-auto no-scrollbar pb-18 md:hidden transition-all">
                <Player songInfo={songInfo}/>
                {songsData.map((song)=>
                    (<Card key={song.id} song={song}/>)
                )}
            </div>}
        </div>
    )
}
export default Home;