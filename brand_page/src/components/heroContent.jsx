const HeroContent = ()=>
{
    return (
        <>
            <div className="hero-content">
                <h1 className="heading">
                    YOUR FEET 
                    DESERVE
                    THE BEST
                </h1>

                <p className="para">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="btns">
                    <button className="Shop-now ">Shop Now</button>
                    <button className="category ">Category</button>
                </div>
                
                <div className="Shop">
                    <p className="Shop-para">
                        Also Available On</p>
                    <div className="avl-shop">
                        <a href="https://www.flipkart.com/"
                            target="blank"
                            className="flipkart">
                            <img src="\images\flipkart.png" alt="flipkart" />
                        </a>
                        <a href="https://www.amazon.in/"
                            target="blank"
                            className="amazon">
                            <img src="\images\amazon.png" alt="flipkart" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroContent;