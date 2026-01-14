import { useNavigate } from "react-router-dom";
import styles from "./homePage.module.css";

const Container = ()=>
{
    const navigate = useNavigate();
    const handleOnClick = ()=>
    {
        navigate("/game");
    }
    return (
        <div className= {styles.container}>
            <div className={styles.gameImg}>
                <img src="/images/dices 1.png" alt="Dice rolling illustration" />
            </div>
            <div className={styles.startContainer}>
                <div className={styles.start}>
                    <h1>DICE GAME</h1>
                    <button 
                    onClick={handleOnClick}>Play Now</button>
                </div>
            </div>
            
        </div>
    )
}
export default Container;