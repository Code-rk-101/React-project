import { useContext } from "react";
import style from "./numVal.module.css"
import GameStore from "../store/gameStore";

const NumVal = ({val})=>
{
    
    const {handleOnButtonSelection,selectVal} = useContext(GameStore);
    const handleOnClick =()=>
    {
        handleOnButtonSelection(val);
    }
    return (
        <div >
            <button 
            className={`${style.num} ${(selectVal===val)?`${style.active}`:``}`}
            onClick={handleOnClick}>{val}</button>
        </div>
    )
}
export default NumVal;