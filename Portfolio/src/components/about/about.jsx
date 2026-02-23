import Card from "../card/card";
import "./about.css"

const About =()=>
{
    return (
        <div id="about">
            <div className="leftAbout">
                <div className="circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>
                <div className="aboutDetails">
                    <div className="personalInfo">
                        <h1>PERSONAL INFO</h1>
                        <ul>
                            <li>
                                <span>NAME</span> : RITIK KUMAR
                            </li>
                            <li>
                                <span>AGE</span> : 23
                            </li>
                            <li>
                                <span>GENDER</span> : MALE
                            </li>
                            <li>
                                <span>LANGUAGE</span> : HINDI , ENGLISH
                            </li>
                        </ul>
                    </div>
                    <div className="education">
                        <h1>EDUCATION</h1>
                        <ul>
                            <li>
                                <span>DEGREE</span> : BTECH
                            </li>
                            <li>
                                <span>BRANCH</span> : COMPUTER SCIENCE ENGEINEERING
                            </li>
                            <li>
                                <span>COLLEGE</span> : HERITAGE INSTUTE OF TECHNOLOGY
                            </li>
                            <li>
                                <span>CGPA</span> : 8.5
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h1>SKILLS</h1>
                        <ul>
                            <li>
                                C , C++
                            </li>
                            <li>
                                JAVASCRIPT
                            </li>
                            <li>
                                REACT
                            </li>
                            <li>
                                MONGODB
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightAbout">
                <Card title={"MERN STACK WEB DEVELOPER"} image={"/images/Mern.png"}/>
                <Card title={"DSA"} image={"/images/DSA.png"}/>
                <Card title={"C++"} image={"/images/C++.png"}/>
            </div>
        </div>
    )
}
export default About;