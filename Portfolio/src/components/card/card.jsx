import "./card.css"

const Card = ({title,image})=>
{
    return (
        <div className="card">
            <h1>{title}</h1>
            <div className="hoverCard">
                <img src={image} alt="card image" />
            </div>
        </div>
    )
}
export default Card;