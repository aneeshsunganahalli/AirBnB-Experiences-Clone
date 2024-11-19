export default function Card() {
  return(
    <div className="card-container">
      <div className="cards">
        <div className="card-image-container">
          <img className="card-image" src="im12.png"/>
          <div className="online">SOLD OUT</div>
        </div>
        <div className="rating">
          <img className="star" src="Star 1.png"/>
          <p>5.0<span className="number">(6)&#183;USA</span></p>
        </div>
        <p className="card-info">Life lessons with Katie Zaferes</p>
        <p><bold className="bold">From $136</bold>/ person</p>
      </div>
      
      <div className="cards">
        <div className="card-image-container">
          <img className="card-image" src="im12.png"/>
          <div className="online">SOLD OUT</div>
        </div>
        <div className="rating">
          <img className="star" src="Star 1.png"/>
          <p>5.0<span className="number">(6)&#183;USA</span></p>
        </div>
        <p className="card-info">Life lessons with Katie Zaferes</p>
        <p><bold className="bold">From $136</bold>/ person</p>
      </div>
      
    </div>
  )
}