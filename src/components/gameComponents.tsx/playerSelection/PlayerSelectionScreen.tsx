import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"
import ConfirmPlayer from "./ConfirmPlayer"
import romanEmperors from "../../../data"

type FinishedSelection = {
    teamPlayers: (name: string, switchval: boolean) => void;
}

export default function PlayerSelectionScreen({ teamPlayers }: FinishedSelection){
    // passed to team
    
    const [switchPlayers, setSwitchPlayers] = useState(true)

    // passed to player select
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [showConfirmButton, setShowConfirmButton] = useState(false)
    const [handleMap, setHandleMap] = useState(new Map(romanEmperors.map(data => [data.id, data.name])))

    // passed to confirm
     const [buttonIsNull, setButtonIsNull] = useState(false)
    
    function handleClick(id: number, name: string){ // player selection
        setPlayerName(prev => ({...prev, id: id, name: name})) 
        setShowConfirmButton(prev => true) // confirm button
        setButtonIsNull(prev => true) // set button to null while confirming choice 
    }

    function handleConfirm(choice: boolean){ // player confirmation
        const playerValues = {id: playerName.id, name: playerName.name}


        if(choice){ 
                setButtonIsNull(prev => false) // set button to null
                setSwitchPlayers(prev => !prev) 
                setShowConfirmButton(prev => false)  

                setHandleMap(prev => { // delete player from map
                    const updated = new Map(prev)
                    updated.delete(playerValues.id)
                    return updated
                })

                if(switchPlayers){ // sets player 1 name
                    teamPlayers(playerValues.name, switchPlayers)
                } 
                else if(!switchPlayers){ // sets player 2 name
                    teamPlayers(playerValues.name, !switchPlayers)
                }
        }

        else if(!choice){ // handle no
            setButtonIsNull(prev => false)
            setShowConfirmButton(prev => false)
        }
    }


    return(

            <div>
                <SelectPlayers 
                    handleSelect={handleClick}
                    switchPlayer={switchPlayers}
                    mapPlayers={handleMap}
                    nullButtons={buttonIsNull}
                />
                
                <ConfirmPlayer 
                    confirmName={playerName.name} 
                    confirmChoice={handleConfirm} 
                    confirmButton={showConfirmButton}
                />
            </div>
    )
}