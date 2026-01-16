import styles from "./card.module.css"

const Card =()=>
{
    return (
        <>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src="/images/Ellipse 1.png" alt="" />
                </div>
                <div className={styles.content}>
                    <h1>Boiled Eggs</h1>
                </div>
            </div>
        </>
    )
}
export default Card;