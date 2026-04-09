import React from "react";
import bnrShadow from "../../../assets/bg-shadow.png";

import footballImg from "../../../assets/footballgif.avif";
import { toast } from "react-toastify";
const Banner = ({ coin, setCoin }) => {
  
  const handleBannerCoin = () => {
    
    setCoin(coin + Number(100));
    
    toast("Claimed 100M Credit");
    
  };

  return (
    <div
      className="
            min-h-[60vh] 
            relative 
            bg-[#131313] 
            w-[80%] mx-auto 
            rounded-xl 
            border-none bg-cover 
            bg-center
            space-y-2
            mt-5
            mb-10
        "
      style={{ backgroundImage: `url(${bnrShadow})` }}
    >
      {/* <img
        src={footballImg}
        alt=""
        className="
                absolute
                top-5
                -translate-x-1/2
                left-1/2
                text-center 
                w-1/4 
                lg:w-1/6
                "
      /> */}
      
      <div
        className="
                relative z-10
                flex flex-col
                items-center
                space-y-2
                text-center
                pt-40
                md:pt-50
                lg:pt-55
            "
      >
        <h1
          className="
                    text-2xl
                    md:text-4xl
                    text-white
                    font-bold
                "
        >
          Assemble Your Ultimate Dream Football Team
        </h1>
        <p
          className="
                    text-sm md:text-xl text-white opacity-70 mb-6
                "
        >
          Beyond Boundaries Beyond Limits
        </p>
        <div
          className="
                    border-2 p-1.5 border-[#E7FE29] rounded-2xl
                "
        >
          <button
            onClick={handleBannerCoin}
            className="
                    btn
                    bg-[#E7FE29]
                    font-bold
                    border-none
                    rounded-xl"
                    
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
