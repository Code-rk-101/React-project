import { useContext } from "react";
import styles from "./header.module.css"
import FoodDataStore from "../store/food-store-context-store";

const Header =()=>
{
    const type = ["All","Breakfast","Lunch","Dinner","Dessert"];
    const {filterFood} = useContext(FoodDataStore);
    const handleOnClick =(typ)=>
    {
        filterFood(typ.toLowerCase());
    }
    return (
        <>
            <div className={styles.header_main_div}>
                <div className={styles.search_bar}>

                    <img 
                    src="\images\Foody Zone.png" 
                    alt="logo"
                    className={styles.logo} />

                    <input 
                    type="text"
                    name="search"
                    placeholder="Search Food..."
                    className={styles.inp} />
                </div>
                <div className={styles.nav}>
                    {type.map(
                        (typ)=>(
                        <button
                        key={typ}
                        className="btn"
                        onClick={()=>handleOnClick(typ)}>{typ}</button>)
                    )}
                </div>
            </div>
        </>
    )
}
export default Header;