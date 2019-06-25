import React from 'react'
import Person from './Person.js'
import "./style.css"

const App = (props) => {
   const people = [
       {name: "Joe",     favColor: "blue",           _id: "0"},
       {name: "Ralph",   favColor: "darkblue",       _id: "1"},
       {name: "Joey",    favColor: "lightblue",      _id: "2"},
       {name: "Joseph",  favColor: "dodgerblue",     _id: "3"},
       {name: "Jo",      favColor: "cornflowerblue", _id: "4"},
       {name: "Jollen",  favColor: "darkslateblue",  _id: "5"}
   ]

   const mappedNames = people.map(person => 
                                <Person 
                                    key={person._id} 
                                    name={person.name} 
                                    favColor={person.favColor}/>
                                )
                      
    return (
        <div>
            <h3>Mapping in React</h3>
            {mappedNames}
            <div>FOOOOOTER</div>
        </div>
    )
}

export default App