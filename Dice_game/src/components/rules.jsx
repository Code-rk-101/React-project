import style from "./rules.module.css"

const Rules = ()=>
{
    return (
        <>
            <div className={style.ruleContainer}>
                <div className={style.rules}>
                    <h1>How to play dice game</h1>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                    <p>if you get wrong guess then  2 point will be dedcuted </p>
                </div>
            </div>
        </>
    )
}
export default Rules;