import React from "react";
import coinImg from "../../assets/coin.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between container mx-auto">
      <div className="flex-none">
        <img src={logo} alt="" />
      </div>

      <div className="flex-none">
        <button className="flex gap-2 font-bold">
          O Coin
          <img src={coinImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
