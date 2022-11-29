import '../assets/Navbar.css'
import { Link } from "react-router-dom"
import { Button, Layout } from 'antd'


export default function Navbar() {
  return (
    <Layout className='navbar'>
   
  <div >
      <Link to={'./'}>
        <Button type="button" shape='round'>Home</Button>
        </Link>
      

      <Link to={'./quiz'}>
        <Button type='button' shape='round'>Quiz</Button>
      </Link>
  

      <Link to={'./destinationList'}>
        <Button type='button' shape='round'>Destinations</Button>
      </Link>
 

      <Link to={"./profile"}>
        <Button>Profile</Button>
      </Link>
      </div>

      </Layout>
  )
}