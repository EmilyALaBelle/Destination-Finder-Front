import { useLocation } from "react-router-dom";
import '../assets/results.css'

export default function Results() {
  const { state } = useLocation();
  return (
    <div className="head">
      <h1 className="header">Results</h1>
      {state.map(destination => {
        return (
          <>


            <h1 className="result-box">
            
            <div className="city-state-box"> 
                {destination.City},
                {destination.State}
              </div>

              <img className="image" src={destination.Image} alt="" />

              
              <div className="climate-box">
                Climate: {destination.Climate}
              </div>
              
              <div className="terrain-box">
                Terrain: {destination.Terrain}
              </div>
              
              <div className="budget-box">
                Budget: {destination.Budget}
              </div>
            </h1>
          </>
        )
      })}

      {/* <ResultDestination /> */}
    </div>
  )
}