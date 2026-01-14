import { useContext, useState } from "react";
import style from "./gamebord.module.css"
import GameStore from "../store/gameStore";

const imgVal= ()=> 
{
    const value = Math.floor(Math.random()*6) +1;
    return value;
}  

const GameBord = ({handleRuleShow})=>
{
    const {handleOnDiceClick,errorMsgStatus,resetScore} = useContext(GameStore);
    const [val,setVal] = useState(1);
    const [sel,setSel] = useState(true);

    const handleOnImageClick = () =>
    {
        if(!errorMsgStatus)
        {
            const newVal = imgVal();
            setVal(newVal);
            handleOnDiceClick(newVal);
        }   
    };
    const handleOnRules = ()=>
    {
        setSel(!sel);
        handleRuleShow(sel);
    }
    const handleResetScore =()=>
    {
        resetScore();
    }
    

    return (
      <>
        <div className={style.gameBord}>
            <div className={style.gameSection}>
                <div className={style.imgSec}>
                    <img
                    src={`/images/dice_${val}.png`}
                    alt="dice image"
                    onClick ={handleOnImageClick}
                    />
                    <p>Click on Dice to roll</p>
                </div>

                <div className={style.controlBtns}>
                    <div>
                        <button 
                        className={style.resetBtn}
                        onClick={handleResetScore}>Reset Score</button>
                    </div>
                    <div>
                    {sel ? (
                        <button 
                        className={style.showResult}
                        onClick={handleOnRules}>Show Rules</button>
                        ) : (
                        <button 
                        className={style.hideResult}
                        onClick={handleOnRules}>Hide Rules</button>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
      </>
    );
}

export default GameBord;