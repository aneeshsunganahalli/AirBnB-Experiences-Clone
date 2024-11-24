import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import './App.css'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card 
          image="im12.png"
          online="SOLD OUT"
          rating={5}
          reviews={6}
          price={136}
          cardInfo="Life lessons with Katie Zaferes"
        />
        <Card 
          image="im13.png"
          online="ONLINE"
          rating={5}
          reviews={30}
          cardInfo="Learn wedding photography"
          price={125}
        />
        <Card 
          image="im14.png"
          online="SOLD OUT"
          rating={4.8}
          reviews={2}
          cardInfo="Group Mountain Biking"
          price={50}
        />
      </div>
    </div>
  )
}

export default App
