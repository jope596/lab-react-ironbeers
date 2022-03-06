import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeer() {
  const [getRandomBeers, setGetRandomBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log(response.data);
        setGetRandomBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <>
        <img src={getRandomBeers.image_url} alt="random beer" />
        <h2>{getRandomBeers.name}</h2>
        <h4>{getRandomBeers.tagline}</h4>
        <h6>{getRandomBeers.first_brewed}</h6>
        <h6>{getRandomBeers.attenuation_level}</h6>
        <p>{getRandomBeers.description}</p>
        <h3>{getRandomBeers.contributed_by}</h3>
      </>
    </div>
  );
}

export default RandomBeer;
