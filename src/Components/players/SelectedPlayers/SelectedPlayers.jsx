import React from "react";

import { toast } from "react-toastify";
import SelectedCard from "../../ui/SelectedCard";


const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleDeleteSelectedPlayers = (player)=>{
        const filterSelectedPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.name != player.name)
        setSelectedPlayers(filterSelectedPlayer);
        setCoin(coin + Number(player.price));
        toast.warning(`Removed ${player.name}`)
    }
  
  return (
    <div className="flex flex-col gap-4">
      {selectedPlayers.length === 0 ? 
      <div className="flex flex-col justify-center items-center h-[400px]">
        <h2 className="font-semibold text-2xl">No Player Selected</h2>
        <p>Please add player from available tab</p>
      </div> 
      : selectedPlayers.map((player, index) => (
            <SelectedCard key={index} player={player} handleDeleteSelectedPlayers={handleDeleteSelectedPlayers}></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
