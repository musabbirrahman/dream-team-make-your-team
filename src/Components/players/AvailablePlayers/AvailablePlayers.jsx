import React from "react";

import Card from "../../ui/Card";


const AvailablePlayers = ({ players, setCoin, coin }) => {
  return (
    <div className="w-[96%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      

      {players.map((player, index) => (
        <Card key={index} coin={coin} setCoin={setCoin} player={player}></Card>
      ))}
    </div>
  );
};

export default AvailablePlayers;
