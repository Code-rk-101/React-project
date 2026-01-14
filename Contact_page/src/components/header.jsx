import style from "./header.module.css";

const Header = ()=>
{   return (
    <>
        <nav className={style.navBar}>
            <img src="\images\Frame 2 1.png" alt="logo" />
            <div>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
            </div>
        </nav>
    </>
)
}
export default Header