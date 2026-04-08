import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { HiH1 } from "react-icons/hi2";
import { MdStadium } from "react-icons/md";
const Card = ({player, setCoin, coin}) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleSelectedPlayer =() => {
        if(coin < player.price){
            alert("Not enough coin to select this player")
            return;
        }
        setIsSelected(!isSelected);

        setCoin(coin - player.price);
        alert(`Selected ${player.name}`)
        


    }
    return (
        <div>
            
            <div className="card bg-base-100 shadow-sm max-w-[400px]">
                      <figure className="p-2">
                        <img className="w-full h-[200px] rounded-lg"
                          src={player.image}
                          alt={player.name}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          <FaUser /> {player.name}
                        </h2>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center opacity-50">
                            <FaFlag />
                            <p>{player.country}</p>
                          </div>
            
                          <button className="btn ">{player.position}</button>
                        </div>
                        <div className="flex gap-2 items-center opacity-50">
                          <MdStadium />
                          <p>{player.club}</p>
                        </div>
            
                        <div className="mx-5 text-[#13131311]">
                          <hr />
                        </div>
            
                        <div className="flex justify-between">
                          <p className="font-bold mb-4">Rating: {player.rating}</p>
                          <p className="font-bold text-right">{player.foot} Footed</p>
                        </div>
            
                        <div className="card-actions justify-between items-center">
                          <p className="font-bold">Price: {player.price}M</p>
                          <button onClick={handleSelectedPlayer} className={`${isSelected ? "btn btn-disabled" : "btn btn-dash btn-info" }`}>{isSelected? "Selected" : "Choose Player"}</button>
                        </div>
                      </div>
                    </div>
        </div>
    );
};

export default Card;