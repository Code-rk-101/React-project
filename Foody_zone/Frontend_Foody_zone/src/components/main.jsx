// import Card from "./cards";
import styles from "./main.module.css";
import SubCardSection from "./subCardSection";

const Main =()=>
{
    return (
        <div className={styles.mainContainer}>
            <div className={styles.cardSection}>
                <SubCardSection/>
                <SubCardSection/>
            </div>
        </div>
    )
}
export default Main;