import React from "react";
import PropTypes from "prop-types"


const foodLike = [
  {id:1, name: "kimchi", rating:5, image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"},
  {id:2, name: "samgyeopsal", rating:4, image: "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG"},
  {id:3, name: "Bibimbap", rating:3, image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg"},
  {id:4, name: "salt", rating:2, image: "https://www.mstoday.co.kr/news/photo/202007/42957_30190_4959.jpg"}
]


function Food({name, picture, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name}></img>
      
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {

  return(
    <div>
      {foodLike.map( dish => 
      <Food 
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}/>
      )}
    </div>
  )
}


export default App;
