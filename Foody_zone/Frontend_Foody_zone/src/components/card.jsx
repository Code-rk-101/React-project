import styles from "./card.module.css"

const Card =({food})=>
{
    return (
        <>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img 
                    src={`http://localhost:9000${food.image}`} alt="food image" />
                </div>
                <div className={styles.content}>
                    <div>
                        <h3>{food.name}</h3>
                        <p>
                            {food.text}
                        </p>
                    </div>
                    
                    <button
                    className={`btn ${styles.btn}`}>${food.price}</button>
                    
                </div>
            </div>
        </>
    )
}
export default Card;