import styles from "./header.module.css"

const Header =()=>
{
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
                    <button 
                    className={styles.btn}>All</button>
                    <button
                    className={styles.btn}>Breakfast</button>
                    <button
                    className={styles.btn}>Lunch</button>
                    <button
                    className={styles.btn}>Dinner</button>
                </div>
            </div>
        </>
    )
}
export default Header;