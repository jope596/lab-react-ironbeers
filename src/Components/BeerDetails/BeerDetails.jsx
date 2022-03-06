import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetails() {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((info) => {
        setBeer(info.data);
        console.log(info.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div class="image-div">
        <img class="beer-image" src={beer.image_url} alt="beer image" />
        </div>
        <h2>{beer.name}</h2>
        <h4>{beer.tagline}</h4>
        <h6>{beer.first_brewed}</h6>
        <h6>{beer.attenuation_level}</h6>
        <p>{beer.description}</p>
        <h3>{beer.contributed_by}</h3>
      
    </div>
  );
}

export default BeerDetails;


