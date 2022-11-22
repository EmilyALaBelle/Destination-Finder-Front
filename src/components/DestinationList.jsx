import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'

export default function Destinations() {
    const [destinations, setDestinations] = useState([])
    
    useEffect(() => {
      fetch(`http://127.0.0.1:5002/destinations`)
      .then(res => res.json())
      .then(data => setDestinations(data))
      .catch(err => console.error(err))
    }, [])

    console.log(destinations)

    const AllDestinations = () => {
      return (
        <div>
          {destinations.map((item, index) => {
      return (
        <Link state={item} to={'./card'} key={item._Id}>
        <img src={`https://source.unsplash.com/random?sig=${index}`} alt=''/>
        <h4>{destinations.Climate}</h4>
        <h4>{destinations.Terrain}</h4>
        <h4>{destinations.Budget}</h4>
        </Link>
      )
    })} </div>
    )
    }
return (
  <div>
    <h1>Destination List</h1>
    <AllDestinations />
  </div>
)
}