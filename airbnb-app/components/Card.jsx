export default function Card(props) {
  return(
      <div className="cards">
        <div className="card-image-container">
          <img className="card-image" src={props.image}/>
          <div className="online">{props.online}</div>
        </div>
        <div className="rating">
          <img className="star" src="Star 1.png"/>
          <p>{props.rating}<span className="number">({props.reviews})&#183;USA</span></p>
        </div>
        <p className="card-info">{props.cardInfo}</p>
        <p><span className="bold">From ${props.price}</span>/ person</p>
      </div>
    
  )
}