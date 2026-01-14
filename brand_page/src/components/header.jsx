const Header = ()=>
{
    return (
    <>
        
        <nav className="container">
            <div className="logo">
            <a href="https://www.nike.com/in/?locale=en_IN&msockid=07a6500db5b161a4257a4656b4416072">
                    <img src="\images\brand_logo.png" 
            alt="logo" />
                </a>
            </div>
            <div className="nav-btns">
                
                <div className=" btn hover-effect">
                    <a href="#">MENU</a>
                </div>
                <div className=" btn hover-effect">
                    <a href="#">LOCATION</a>
                </div>
                <div className=" btn hover-effect">
                    <a href="#">ABOUT</a>
                </div>
                <div className=" btn hover-effect">
                    <a href="#">CONTACT</a>
                </div>

            </div>
            <div>
                <button className="login">Login</button>
            </div>
        </nav>

    
    </>
    )
}
export default Header;