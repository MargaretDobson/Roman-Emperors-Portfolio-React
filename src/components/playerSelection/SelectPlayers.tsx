import romanEmperors from "../../data";
import { useState } from "react";
import ConfirmPlayer from "./ConfirmPlayer";
import TeamOne from "../teamComponents/teamOne";

export default function SelectPlayers(){
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [confirmPlayer, setConfirmPlayer] = useState(false)
    const [selectPlayer, setSelectPlayer] = useState(false)
   
    function handleClick(id: number, name: string){
        setPlayerName(prev => ({...prev, id: id, name: name})) // select first player
        setSelectPlayer(prev => !prev)
    }

    function handleConfirm(choice: boolean){
        if(choice){
            setConfirmPlayer(prev => !prev)
        }
        else{
            setSelectPlayer(prev => !prev)
        }
    }
    
    return (

        <div>
            {romanEmperors.map(
                ruler => (
                    <div>
                        <button
                        key={ruler.id}
                        // id of button passed to click handler here
                        onClick={() => handleClick(ruler.id, ruler.name)}
                        id="btn"
                        >{ruler.name}</button>                       
                    </div>
                    
                )
            )}

            <ConfirmPlayer 
                confirmName={playerName.name} 
                confirmChoice={handleConfirm} 
                choosePlayer={selectPlayer}
            />

            {confirmPlayer && playerName && (
                <TeamOne
                    confirmedPlayer={{
                        name: playerName.name,
                        id: playerName.id,
                        confirmed: confirmPlayer
                    }}
                    />
            )}
        </div>
    )
}