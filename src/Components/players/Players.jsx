import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';

const Players = ({fetchPlayers}) => {
    const players = use(fetchPlayers)
    return (
        <div className=' md:container mx-auto w-[90%]'>
            
            <AvailablePlayers players={players}></AvailablePlayers>

        </div>
    );
};

export default Players;