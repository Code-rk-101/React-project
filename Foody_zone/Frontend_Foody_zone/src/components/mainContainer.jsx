import { useContext } from "react";
import styles from "./mainContainer.module.css";
import FoodDataStore from "../store/food-store-context-store";
import Card from "./card";

const MainContainer =()=>
{
    const { foodData } = useContext(FoodDataStore)
    return (
        
        <div className={styles.mainContainer}>
            <div className={styles.cardSection}>
                {foodData.map((food) => (
                    <Card key={food.name} food ={food}/>))
                }  
            </div>
        </div>
    )
}
export default MainContainer;