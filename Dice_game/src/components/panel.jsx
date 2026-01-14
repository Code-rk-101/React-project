import { useContext } from "react";
import NumVal from "./numValue";
import style from "./panel.module.css"
import GameStore from "../store/gameStore";
const Panel = ()=>
{
    const Num = ["1","2","3","4","5","6"];
    const {score} = useContext(GameStore);
    return(
        <>
            <div className={style.panel}>
                <div className={style.score}>
                    <div className={style.value}>
                        <p>{score}</p>
                    </div>
                    <div className={style.scoreMsg}>
                        <p>Total Score</p>
                    </div>
                </div>

                <div className={style.selctSection}>
                
                    <div className={style.selectBtns}>
                        {Num.map((val) => 
                    (
                        <NumVal 
                        key={val} val={val} />
                    ))}
                    </div>
                    <div className={style.selectMsg}>
                        <p>Select Number</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Panel;