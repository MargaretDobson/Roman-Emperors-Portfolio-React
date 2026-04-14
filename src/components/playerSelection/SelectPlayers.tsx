import romanEmperors from "../../data";
import { useState } from "react";

export default function SelectPlayers(){
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    
   
    function handleClick(id: number){
      // change this later to be less lines
        const mapPlayer = new Map(romanEmperors.map(data => [data.id, data.name])) // get player name
        const randID = Math.floor(Math.random() * mapPlayer.size) // get a random player id
        const player = mapPlayer.get(randID) ?? "" // get the name associated with the ID
        
        //setting player 1
        setPlayerName((prev => ({...prev, id: randID, name: player}))) //Update player selected
        
    }
    
    
    return (

        <div>
            <div>
                <p>team 1</p>
                    <div>
                        <p>Player 1</p>
                        <p>{playerName.name}</p>
                        <button
                        key={romanEmperors[0].id}
                        // id of button passed to click handler here
                        onClick={() => handleClick(romanEmperors[0].id)}
                        id="btn"
                        >Random</button>
                    </div>
            </div>   

            <p>team 2</p>
            <p>judges</p>
        </div>
    )
}