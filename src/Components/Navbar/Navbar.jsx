import React from "react";
import coinImg from "../../assets/coin.png";
import football from "../../assets/football.png"


const Navbar = ({coin}) => {
  return (
    <div className="navbar flex justify-between w-[80%] mx-auto">
      <div className="flex-none">
        <img className="w-10 h-10" src={football} alt="" />
      </div>

      <div className="flex-none">
        <button className="flex gap-2 font-bold">
          {coin}M
          <img src={coinImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
