import Card from "../card/card";
import "./project.css"

const Project = ()=>
{
    return(
        <div id="project">
            <h1 className="msg">5+ React projects</h1>
            <div className="slider">

                <Card title={"DICE GAME"} image={"/images/Dice_game.png"}/>
                <Card title={"FOODY ZONE"} image={"/images/Foody_zone.png"}/>
                <Card title={"BRAND PAGE"} image={"/images/BrandPage.png"}/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
export default Project;