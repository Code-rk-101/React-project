import { useContext, useEffect, useState } from "react";
import Player from "../player";
import MusicContextStore from "../../store/music_app-store";
import { IoSearch } from "react-icons/io5";
import { songsData } from "../../../songs";
import Card from "../card";


const Search = ()=>
{
    const {songInfo} = useContext(MusicContextStore);
    const [searchList,setSearchList] = useState([]);
    const [inp,setInp] = useState("");
    console.log(inp);
    
    useEffect(()=>
        {
            const input = inp.toLocaleLowerCase();
            let a = songsData.filter((song)=>(song.name.toLocaleLowerCase().includes(input) || song.singer.toLocaleLowerCase().includes(input)))
            setSearchList(a);
        },
    [inp]);
    return (
       <div className='w-full h-screen  bg-black flex flex-col items-center gap-5 md:pt-25 pt-7 '>
            <Player songInfo={songInfo}/>

            <form action="POST" className='w-[90%] md:w-[60%] h-15 bg-gray-800 flex justify-center items-center gap-5 rounded-lg overflow-hidden p-3.75 md:p-1.5 '>
                <IoSearch className='text-gray-200 text-[18px] '/>
                <input type="text" className='w-[90%] h-full bg-gray-800 outline-none text-white p-2.5 text-[18px] ' placeholder="Search Your Songs"
                onChange={(e)=>{setInp(e.target.value)}}/>
            </form>
            
            {inp?
            <div className='w-[90%] h-full p-2.5 flex flex-col justify-start items-center gap-5 md:pb-30 pb-35 overflow-auto no-scrollbar'>
                {searchList.map((song)=>
                    (
                        <Card key={song.id} song={song}/>
                    ))}
            </div>:
            <div className="text-gray-400 text-[40px] pt-20">Search songs...</div>}
            

        </div>
    )
}
export default Search;