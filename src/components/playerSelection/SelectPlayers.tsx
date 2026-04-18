import romanEmperors from "../../data";
import { useState } from "react";
import ConfirmPlayer from "./ConfirmPlayer";
import TeamOne from "../teamComponents/teamOne";

export default function SelectPlayers(){
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [confirmPlayer, setConfirmPlayer] = useState(false)
    const [selectPlayer, setSelectPlayer] = useState(false)

    const [teamMemberSelect, setTeamMemberSelect] = useState(true)
    const [playerValue, setPlayerValue] = useState()
   
    function handleClick(id: number, name: string){
        setPlayerName(prev => ({...prev, id: id, name: name})) // select first player
        setSelectPlayer(prev => !prev)
        
    }
    

    function handleConfirm(choice: boolean){
        if(choice){
            setConfirmPlayer(true)
            
        }
        else{
            setSelectPlayer(false)
        }
    }
    
    return (

        <div>
            <p>Select your first Player</p>


            {romanEmperors.map(
                ruler => (
                    <div> {teamMemberSelect ? 
                        <button
                        key={ruler.id}
                        // id of button passed to click handler here
                        onClick={() => handleClick(ruler.id, ruler.name)}
                        id="btn"
                        >{ruler.name}</button>
                    : null}             
                    </div>
                    
                )
            )}

            <ConfirmPlayer 
                confirmName={playerName.name} 
                confirmChoice={handleConfirm} 
                choosePlayer={selectPlayer}
            />
            <TeamOne confirmName={playerName.name} 
                     confirmID={playerName.id} 
                     confirmChoice={confirmPlayer}
            />
        </div>
    )
}