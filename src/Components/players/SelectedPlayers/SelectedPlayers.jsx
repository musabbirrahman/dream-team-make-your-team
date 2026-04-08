import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";


const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

    const handleDeleteSelecedPlayers = (player)=>{
        const filterSelectedPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.name != player.name)
        setSelectedPlayers(filterSelectedPlayer);
        setCoin(coin + Number(player.price));
        toast.warning(`Removed ${player.name}`)
    }
  
  return (
    <div className="flex flex-col gap-4">
      {selectedPlayers.map((player, index) => (
        <div className="flex justify-between p-4 rounded-2xl bg-[#13131308] items-center" key={index}>
            <div className="flex gap-2">
                <img className="w-[80px] h-[80px] rounded-2xl" src={player.image} alt={player.name} />
                <div>
                    <h2 className="font-semibold md:text-2xl">{player.name}</h2>
                    <p className="text-[#13131383]">{player.position}</p>
                </div>
            </div>
            <button onClick={()=> handleDeleteSelecedPlayers(player)} className="btn text-red-500 rounded-full">
                <RiDeleteBinLine />
            </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
