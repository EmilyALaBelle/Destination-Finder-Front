import {Link} from "react-router-dom"
import { Button } from "antd"
import '../assets/Home.css'

export default function Home(){
  return (
    <div>
       <header className="hero-container"></header>
    
    <h1 className="call-action">Find your perfect destination</h1>
   <Link className="quiz-button" to="/quiz">
   <Button>Take Our Quiz</Button>
    </Link>
   <Link className="destination-button" to="/destinationList">
   <Button>Destinations</Button>
    </Link>
    </div>
  )
}