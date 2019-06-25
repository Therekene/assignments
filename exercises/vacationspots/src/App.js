import React from 'react'
import Spots from './spots.js'

const App = (props) => {
let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

const mappedspots = vacationSpots.map((spots,i) => <Spots 
                            key={i}
                            place = {spots.place}
                            price = {spots.price}
                            timeToGo = {spots.timeToGo}/>
                            )
        return (
            <div>
                <h1>Vacation Spots</h1>
                {mappedspots}
            </div>

        )



                        }

export default App