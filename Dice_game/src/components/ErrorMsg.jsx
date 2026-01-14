import style from "./errorMsg.module.css"

const ErrorMsg = ()=>
{
    let statu = true;
    // statu = false;
    return (
        <>
            <div 
            className={`${statu ? style.msg : style.msg1}`}>
                <div>
                    You have not selected any number
                </div>
            </div>
        </>
    )
}
export default ErrorMsg;