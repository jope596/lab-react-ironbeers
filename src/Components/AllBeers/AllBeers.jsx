import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllBeers() {
    const [beer, setBeer] = useState([]);


    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((info) => {
            setBeer(info.data)
            console.log(info.data)
        })
        .catch((err) =>{
         console.log(err);           
        })
    },[] )

  return ( 
    <div>
    {beer.map((beer) => {
        return (
         <> 
         <Link to={`/${beer._id}`}>
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt="beer image" />
        </Link>
        <h4>{beer.tagline}</h4>
        <h6>{beer.first_brewed}</h6>
        <h6>{beer.attenuation_level}</h6>
        <p>{beer.description}</p>
        <h3>{beer.contributed_by}</h3>
        </>  
        )
    })}
    </div>
  )
}

export default AllBeers