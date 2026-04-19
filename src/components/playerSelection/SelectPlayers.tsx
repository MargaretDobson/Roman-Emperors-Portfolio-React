import romanEmperors from "../../data";
import { useState } from "react";
import ConfirmPlayer from "./ConfirmPlayer";
import TeamOne from "../teamComponents/teamOne";

type ConfirmProps = {
    switchPlayer: boolean;
    buttonDisplay: () => void;
}

export default function SelectPlayers({switchPlayer, buttonDisplay}: ConfirmProps){
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [confirmPlayer, setConfirmPlayer] = useState(false)
    const [selectPlayer, setSelectPlayer] = useState(false)
    
    function handleClick(id: number, name: string){ // player selection
        setPlayerName(prev => ({...prev, id: id, name: name})) 
        setSelectPlayer(prev => !prev)
    }
    

    function handleConfirm(choice: boolean){ // player confirmation
        if(choice){
            setConfirmPlayer(true)
            buttonDisplay()
        }
        else{
            setSelectPlayer(false)
        }
    }
    
    return (

        <div>
            {switchPlayer ? <p>Select your first Player</p> : null}
            {!switchPlayer ? <p>Select your second Player</p> : null}
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
            <TeamOne confirmName={playerName.name} 
                     confirmID={playerName.id} 
                     confirmChoice={confirmPlayer}
            />
        </div>
    )
}