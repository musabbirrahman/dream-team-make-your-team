import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({fetchPlayers}) => {
    const players = use(fetchPlayers)
    const [selectedButton, setSelectedButton] = useState(true)
    return (
        <div className=' md:container mx-auto w-[90%] my-[50px]'>

            <div className='flex justify-between items-center mb-5'>
                {selectedButton ? <h1 className='md:ml-10 font-bold md:text-2xl'>Available Players</h1> : <h1 className='md:ml-10 font-bold md:text-2xl'>Selected Players</h1>}
                <div className='flex'>
                    <button onClick={()=> (setSelectedButton(!selectedButton))} className={`btn ${selectedButton ? 'bg-[#E7FE29]' : 'text-[#13131371]'}  rounded-l-xl rounded-r-none`}>Available</button>
                    <button onClick={()=> (setSelectedButton(!selectedButton))} className={`btn ${!selectedButton ? 'bg-[#E7FE29]' : 'text-[#13131371]'} md:mr-10 rounded-r-xl rounded-l-none`}>Selected</button>
                </div>
            </div>
            
            <AvailablePlayers players={players}></AvailablePlayers>

        </div>
    );
};

export default Players;