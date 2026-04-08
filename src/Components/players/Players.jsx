import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({fetchPlayers, setCoin, coin}) => {
    const players = use(fetchPlayers)
    const [selectedButton, setSelectedButton] = useState(true)
    const [selectedPlayers, setSelectedPlayers] = useState([])
    return (
        <div className=' mx-auto w-[80%]'>

            <div className='flex justify-between items-center mb-5'>
                {selectedButton ? <h1 className=' font-bold md:text-2xl'>Available Players</h1> : <h1 className=' font-bold md:text-2xl'>Selected Players</h1>}
                <div className='flex'>
                    <button onClick={()=> (setSelectedButton(!selectedButton))} className={`btn ${selectedButton ? 'bg-[#E7FE29]' : 'text-[#13131371]'}  rounded-l-xl rounded-r-none`}>Available</button>
                    <button onClick={()=> (setSelectedButton(!selectedButton))} className={`btn ${!selectedButton ? 'bg-[#E7FE29]' : 'text-[#13131371]'}  rounded-r-xl rounded-l-none`}>Selected</button>
                </div>
            </div>
            
            {selectedButton ? <AvailablePlayers coin={coin} setCoin={setCoin} setSelectedPlayers = {setSelectedPlayers} selectedPlayers = {selectedPlayers} players={players}></AvailablePlayers> : <SelectedPlayers selectedPlayers = {selectedPlayers}></SelectedPlayers>}

        </div>
    );
};

export default Players;