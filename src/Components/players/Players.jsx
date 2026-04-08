import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({fetchPlayers}) => {
    const players = use(fetchPlayers)
    return (
        <div className=' md:container mx-auto w-[90%] my-[50px]'>

            <div className='flex justify-between items-center mb-5'>
                <h1 className='md:ml-10 font-bold md:text-2xl'>Available Players</h1>
                <div className='flex'>
                    <button className='btn bg-[#E7FE29] rounded-l-xl rounded-r-none'>Available</button>
                    <button className='btn md:mr-10 rounded-r-xl rounded-l-none'>Selected</button>
                </div>
            </div>
            
            <AvailablePlayers players={players}></AvailablePlayers>

        </div>
    );
};

export default Players;