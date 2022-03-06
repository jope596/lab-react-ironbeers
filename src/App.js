import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllBeers from "./Components/AllBeers/AllBeers";
import RandomBeer from "./Components/RandomBeer/RandomBeer";
import NewBeer from "./Components/NewBeer/NewBeer";
import HomePage from "./Components/HomePage/HomePage";
import BeerDetails from "./Components/BeerDetails/BeerDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/allBeers" element={<AllBeers />}></Route>
          <Route path="/randomBeer" element={<RandomBeer />}></Route>
          <Route path="/newBeer" element={<NewBeer />}></Route>
          <Route path="/:id" element={<BeerDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
