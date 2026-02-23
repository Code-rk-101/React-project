import "./contact.css"

const Contact = ()=>
{
    return(
        <div id="contact">
            <div className="leftContact">
                <img src="/images/contact.png" alt="" />
            </div>
            <div className="rightContact">
                <form className="form" action="#" method="POST">
                    <h1>CONTACT ME</h1>
                    <input name="username" type="text" placeholder="Name" />
                    <input name="username" type="email" placeholder="Email" />
                    <textarea 
                    name="message" 
                    id="textArea" 
                    placeholder="Message"
                    ></textarea>
                    <input type="submit" placeholder="submit" id="btn" />
                </form>
            </div>
        </div>
    )
}
export default Contact;