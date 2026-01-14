import GameBord from "./gameBord";
import Panel from "./panel";
import style from "./gamePage.module.css"
import ErrorMsg from "./ErrorMsg";
import Rules from "./rules";
import { useContext, useState } from "react";
import GameStore from "../store/gameStore";

const GamePage = ()=>
{
    const {errorMsgStatus} = useContext(GameStore);
    const [rule,setRule] = useState(false);
    const handleRuleShow = (val)=>
    {
        setRule(val);
    }
    return (
        <>
            <div className={style.gamePage}>
                {errorMsgStatus?<ErrorMsg/>:""}
                <Panel/>
                <GameBord handleRuleShow = {handleRuleShow}/>
                {rule?<Rules/>:""}
            </div>
        </>
    )
}
export default GamePage;