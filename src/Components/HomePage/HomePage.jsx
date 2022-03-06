import { Link } from "react-router-dom";
import image1 from "../../assets/beers.png";
import image2 from "../../assets/new-beer.png";
import image3 from "../../assets/random-beer.png";

function HomePage() {
  return (
    <div>
      <div>
        <Link to="/allBeers">
          <img src={image1} alt="bar" />
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius quos
          aut nesciunt repellat, quisquam eum dignissimos qui quas? Rerum in
          voluptas ullam consequatur dolorum. Quod at omnis sapiente inventore.
        </p>
      </div>
      <div>
        <Link to="/randomBeer">
          <img src={image3} alt="beers disposal" />
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius quos
          aut nesciunt repellat, quisquam eum dignissimos qui quas? Rerum in
          voluptas ullam consequatur dolorum. Quod at omnis sapiente inventore.
        </p>
      </div>

      <div>
        <Link to="/newBeer">
          <img src={image2} alt="beers bottle" />
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius quos
          aut nesciunt repellat, quisquam eum dignissimos qui quas? Rerum in
          voluptas ullam consequatur dolorum. Quod at omnis sapiente inventore.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
