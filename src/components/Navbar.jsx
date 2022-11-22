import './Navbar.css'
import { Link } from "react-router-dom"
import { Button, Layout } from 'antd'

export default function Navbar() {
  return (
    <Layout>
   
    <div className="homeButton">
      <Link to={'./'}>
        <Button type="button">Home</Button>
        </Link>
      </div>

      <div className='quizButton'>
      <Link to={'./quiz'}>
        <Button type='button'>Quiz</Button>
      </Link>
      </div>

      <div className='destinationButton'>
      <Link to={'./destinationList'}>
        <Button type='button'>Destinations</Button>
      </Link>
      </div>

      <div className='profileButton'>
      <Link to={"./profile"}>
        <Button>Profile</Button>
      </Link>
      </div>

      </Layout>
  )
}