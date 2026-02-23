import { useContext } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import MusicContextStore from "../store/music_app-store";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addSongs, removeSong } from "../redux/playlist";
import { addSongToLike, removeSongFromLike } from "../redux/like";



const Card = ({song})=>
{
    const dispatch = useDispatch();

    const inPlaylist = useSelector((state)=>
        state.playlist.some((item)=>(item.id === song.id))
    );
    const isLiked = useSelector((state)=>
        state.like.some((item)=>(item.id === song.id))
    );

    const {setIndex,setIsPlaying} = useContext(MusicContextStore)
    return (
        <div className='h-17.5 w-[90%] md:h-30 bg-gray-800 rounded-lg p-1.25 md:p-2.5 flex'>
                <div className="flex justify-start items-center gap-5 w-[70%] h-full cursor-pointer overflow-hidden"
                onClick={()=>
                {
                    setIndex(song.id);
                    setIsPlaying(true);
                }}>
                    <div>
                        <img src={song.image} alt="" className='max-h-15 w-15 md:max-h-25 md:min-w-25 md:w-25 rounded-lg shrink-0'/>
                    </div>
                    <div className=' text-[15px] md:text-[20px]'>
                        <div className='text-white text-[1.2em] font-semibold '>{song.name}</div>
                        <div className='text-gray-400 text-[0.7em] font-semibold '>{song.singer}</div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 w-[30%] h-full text-[15px] md:text-[20px] ">
                    <div>
                        {!inPlaylist?<MdOutlinePlaylistAdd className='text-white text-[1.3em]  cursor-pointer'
                        onClick={()=>
                        {
                            dispatch(addSongs(song.id));
                        }}/>:
                        <MdOutlinePlaylistRemove className='text-white text-[1.3em] cursor-pointer'
                        onClick={()=>
                        {
                            dispatch(removeSong(song.id));
                        }}/>}
                    </div>
                    <div>
                        {!isLiked?<IoIosHeartEmpty className='text-white text-[1.3em] cursor-pointer'
                        onClick={()=>
                        {
                            dispatch(addSongToLike(song.id));
                        }}/>:
                        <IoMdHeart className='text-white text-[1.3em] cursor-pointer'
                        onClick={()=>
                        {
                            dispatch(removeSongFromLike(song.id));
                        }}/>}
                    </div>
                </div>
        </div>
    )
}
export default Card;