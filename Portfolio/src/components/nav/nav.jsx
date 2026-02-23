import { useRef } from "react"
import "./nav.css"
import {Link} from"react-scroll"

const Nav = ()=>
{
    let mobile = useRef();
    let menu = useRef();
    
    const handleOnHamburgerClick =()=>
    {
        mobile.current.classList.toggle("activeMobileMenu");
        menu.current.classList.toggle("activeham")
    }
    return(
        <nav>
            <Link 
            to="home"
            smooth={true}
            duration={400}><h1>PORTFOLIO</h1></Link>
            <ul className="desktopMenu">
                <Link 
                to="home" 
                spy= {true} 
                smooth={true}
                duration={600} 
                activeClass='active'><li>Home</li></Link>

                <Link 
                to="about" 
                spy= {true} 
                smooth={true}
                duration={600}
                activeClass='active'><li>About</li></Link>

                <Link 
                to="project" 
                spy= {true} 
                smooth={true}
                duration={600}
                activeClass='active'><li>Projects</li></Link>

                <Link 
                to="contact" 
                spy= {true} 
                smooth={true}
                duration={600}
                activeClass='active'><li>Contact</li></Link>
            </ul>
            <div className="hamburger" ref={menu} onClick={handleOnHamburgerClick}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <ul className="mobileMenu" ref={mobile}>
                <Link 
                to="home" 
                spy= {true} 
                smooth={true}
                duration={600} 
                activeClass='active'><li>Home</li></Link>
                <Link 
                to="about" 
                spy= {true} 
                smooth={true}
                duration={600}
                activeClass='active'><li>About</li></Link>
                <Link 
                to="project" 
                spy= {true} 
                smooth={true}
                duration={600}
                activeClass='active'><li>Projects</li></Link>
                <Link 
                to="contact" 
                spy= {true} 
                smooth={true}
                duration={600}
                activeClass='active'><li>Contact</li></Link>
            </ul>
        </nav>
    )
}
export default Nav;