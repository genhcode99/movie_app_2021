import React from "react";

function Food({name}){
  return (
    <h1>I like {name}</h1>
  )
}

const foodLike = [{name: "kimchi"},{name: "samgyeopsal"},{name: "Bibibap"},{name: "salt"}]


function App() {
  return(
    <div>
      {foodLike.map( dish => <Food name={dish.name}/>)}
    </div>
  )
}

export default App;
