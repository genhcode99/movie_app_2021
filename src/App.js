import React from "react";


const foodLike = [
  {id:1, name: "kimchi"},
  {id:2, name: "samgyeopsal"},
  {id:3, name: "Bibibap"},
  {id:4, name: "salt"}
]


function Food({name}){
  return (
    <h1>I like {name}</h1>
  )
}


function App() {
  return(
    <div>
      {foodLike.map( dish => <Food key={dish.id} name={dish.name}/>)}
    </div>
  )
}


export default App;
