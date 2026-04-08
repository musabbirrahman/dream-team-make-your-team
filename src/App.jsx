import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Homepage/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/players/Players";

const fetchPlayers = fetch("/players.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        
        <Players fetchPlayers={fetchPlayers}></Players>
      </Suspense>
    </>
  );
}

export default App;
