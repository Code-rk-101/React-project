import GameBord from "./gameBord";
import Panel from "./panel";
import style from "./gamePage.module.css"
import ErrorMsg from "./ErrorMsg";
import Rules from "./rules";

const GamePage = ()=>
{
    return (
        <>
            <div className={style.gamePage}>
                <ErrorMsg/>
                <Panel/>
                <GameBord/>
                <Rules/>
            </div>
        </>
    )
}
export default GamePage;