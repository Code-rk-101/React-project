import { useContext } from "react";
import { useSelector } from "react-redux";
import MusicContextStore from "../../store/music_app-store";
import Player from "../player";
import Card from "../card";


const Liked = ()=>
{
    const like = useSelector((state)=>state.like);
    const {songInfo} = useContext(MusicContextStore);

    return (
       <div className='bg-black w-full h-screen'>
            <div className='w-full h-screen bg-black flex flex-col items-center gap-5 md:pt-15 pt-7 overflow-auto'>
                <Player songInfo={songInfo}/>
                {like.length>0?
                <>
                    <h1 className="text-white font-semibold text-[25px]  ">Liked</h1>
                    <div className="w-full h-full flex flex-col gap-5 items-center overflow-auto pb-30 no-scrollbar">
                        {like.map((song)=>
                        (<Card key={song.id} song={song}/>)
                        )}
                    </div>
                </>:
                <div className="text-gray-600 font-semibold text-[25px] pt-40 ">No Song Liked</div>}
            </div>
       </div>
    )
}
export default Liked;