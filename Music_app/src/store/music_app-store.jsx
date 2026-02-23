import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../songs";

const MusicContextStore = createContext({
    audioRef: null,
});

export default MusicContextStore;

export function MusicContextStoreProvider({ children }) 
{
    const [index,setIndex] = useState(1);
    const [isPlaying,setIsPlaying] = useState(false);
    const [songInfo,setSongInfo] = useState(songsData[0]);
    const [arrow,setArrow] = useState(false);
    const audioRef = useRef(new Audio());
    
    
    const next =()=>
    {
        let no = index + 1;
        if(no >songsData.length)
        {
            no = 1;
        }
        setIndex(no)
    }
    const pre =()=>
    {
        let no = index - 1; 
        if(no ==0)
        {
            no = songsData.length;
        }
        setIndex(no)
    }
    const handleOnPlay =()=>
    {
        setIsPlaying(true);
        audioRef.current.play();
    }
    const handleOnPause = ()=>
    {
        setIsPlaying(false);
        audioRef.current.pause();
    }
    useEffect(()=>
    {
        const temp =()=>
        {
            setSongInfo(songsData[index-1])
            audioRef.current.src = songsData[index-1].song;
            audioRef.current.load();
            if(isPlaying)
            {
                handleOnPlay();
            }
        }
        temp();
        
    },[index]);

    const handleOnRange = (range)=>
    {
        let duration = audioRef.current.duration;
        audioRef.current.currentTime = (duration*range)/100;
    }
    
    
    
    return (
        <MusicContextStore.Provider value={
            { 
                audioRef,
                isPlaying,
                setIsPlaying,
                setIndex,
                next,
                pre,
                handleOnPlay,
                handleOnPause,
                handleOnRange,
                setArrow,
                arrow,
                songInfo,
            }
        }>
            {children}
        </MusicContextStore.Provider>
    );
}