import { useEffect, useState } from "react";
import style from "./gamebord.module.css"

const imgVal= ()=> 
{
    return Math.floor(Math.random()*6) +1;
}  

const GameBord = ()=>
{
    
    const [val,setVal] = useState(1);
    const [sel,setSel] = useState(true);

    const handleOnImageClick =()=>
    {
        setVal(imgVal());
    }
    useEffect(()=>
        {
            console.log(val)
        }
        ,[val]);
    

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
                        <button className={style.resetBtn}>Reset Score</button>
                    </div>
                    <div>
                    {sel ? (
                        <button 
                        className={style.showResult}
                        onClick={()=>setSel(!sel)}>Show Rules</button>
                        ) : (
                        <button 
                        className={style.hideResult}
                        onClick={()=>setSel(!sel)}>Hide Rules</button>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
      </>
    );
}

export default GameBord;