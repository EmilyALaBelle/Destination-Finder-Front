import {useEffect, useState} from "react"
import './List.css'

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
        <div className="background">
          {destinations.map((item, index) => {
      return (
        <div  className="destination-card" state={item} key={item._Id} >
          <h1>{item.City}, {item.State}</h1>
        <img className="image" src={` https://images.unsplash.com/photo-1610566187316-80fd0ba1521a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`} alt=''/>
        <h4 className="climate-box">The Climate is: {item.Climate}</h4>
        <h4 className="terrain-box">The Terrain is: {item.Terrain}</h4>
        <h4 className="budget-box">{item.Budget}</h4>
        </div>
      )
    })} </div>
    )
    }
return (
  <div className="head">
    <h1 className="header">Destination List</h1>
    <AllDestinations />
  </div>
)
}