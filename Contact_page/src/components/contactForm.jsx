import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import style from "./contactForm.module.css"

const ContactForm = ()=>
{
    const handleOnCall = ()=>
    {
        console.log("i want to contact via call");
        
    }
    const handleOnChat = ()=>
    {
        console.log("i want to contact via Chat support");
        
    }
    const handleOnMail = ()=>
    {
        console.log("i want to contact via mail form");
        
    }
    const handleOnSubmit = (event)=>
    {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const submittedValues = Object.fromEntries(formData.entries());
        console.log(submittedValues.name);
        console.log(submittedValues.email);
        console.log(submittedValues.message);
    }
    return (
        <>
            <div>
                <div 
                className={style.btnSection}>
                    <div className={style.modeBtns}>
                        <button 
                        className={style.btn}
                        onClick={handleOnChat}
                        >
                            <MdOutlineMessage  className={style.icon}/>
                            VIA SUPPORT CHAT
                        </button>

                        <button 
                        className={style.btn}
                        onClick={handleOnCall}>
                            <MdCall className={style.icon}/>
                            VIA CALL
                        </button>

                    </div>
                    <div 
                    className={style.emailBtn}
                    onClick={handleOnMail}>
                        <button className={style.emailBtn}>
                            <MdOutlineMessage  className={style.icon}/>
                            VIA EMAIL FORM
                        </button>
                    </div>
                </div>

                <form action="POST" className={style.form} onSubmit={handleOnSubmit}>
                    
                    <div className={style.inpSection}>
                        <div>
                            <label htmlFor="name" className={style.inpDesign}>Name</label>
                            <input type="text"
                            id="name"
                            name="name" 
                            className={`${style.inp} ${style.nameInp }`}/>
                        </div>
                        <div>
                            <label htmlFor="email" className={style.inpDesign} >E-Mail</label>
                            <input type="email" 
                            id="email"
                            name="email"
                            className={`${style.inp} ${style.emailInp }`}/>
                        </div>
                        <div>
                            <label htmlFor="message" className={style.inpDesign} >TEXT</label>
                            <input type="text"
                            id="message"
                            name="message"
                            className={`${style.inp} ${style.textInp }`}/>
                        </div>
                        <div className={style.submit}>
                            <button type = "submit" 
                            className={`${style.btn}`}>
                                SUBMIT
                            </button>
                        </div>
                    </div>
                
                </form>
            </div>  
        </>
    )
}
export default ContactForm;