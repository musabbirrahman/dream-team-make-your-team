import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Homepage/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/players/Players";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Components/Homepage/Footer/Footer";



const fetchPlayers = fetch("/players.json").then((res) => res.json());

function App() {
  const [coin, setCoin] = useState(200)
  return (
    <>
      <Navbar coin = {coin}></Navbar>
      <Banner coin={coin} setCoin={setCoin}></Banner>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        
        <Players coin={coin} setCoin={setCoin} fetchPlayers={fetchPlayers}></Players>
      </Suspense>

      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
