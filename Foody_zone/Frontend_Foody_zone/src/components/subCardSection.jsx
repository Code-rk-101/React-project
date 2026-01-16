import styles from "./subCardSection.module.css"
import Card from "./card";

const SubCardSection = ()=>
{
    return(
        <div className={styles.SubCardSection}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default SubCardSection;