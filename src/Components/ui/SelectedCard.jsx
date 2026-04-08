import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
const SelectedCard = ({player, handleDeleteSelectedPlayers}) => {
  return (
    <div>
      <div
        className="flex justify-between p-4 rounded-2xl bg-[#13131308] items-center"
        
      >
        <div className="flex gap-2">
          <img
            className="w-[80px] h-[80px] rounded-2xl"
            src={player.image}
            alt={player.name}
          />
          <div>
            <h2 className="font-semibold md:text-2xl">{player.name}</h2>
            <p className="text-[#13131383]">{player.position}</p>
          </div>
        </div>
        <button
          onClick={() => handleDeleteSelectedPlayers(player)}
          className="btn text-red-500 rounded-full"
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
