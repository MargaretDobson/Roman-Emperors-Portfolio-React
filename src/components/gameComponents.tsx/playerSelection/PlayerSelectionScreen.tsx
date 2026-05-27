import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"
import ConfirmPlayer from "./ConfirmPlayer"
import romanEmperors from "../../../data"

type FinishedSelection = {
    teamPlayers: (name: string, switchval: boolean) => void;
    buttonNuller: (isnull: boolean) => void;
    buttonNullValue: boolean;
}

export default function PlayerSelectionScreen({ teamPlayers, buttonNuller, buttonNullValue }: FinishedSelection){
    // passed to team
    
    const [switchPlayers, setSwitchPlayers] = useState(true)

    // passed to player select
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [showConfirmButton, setShowConfirmButton] = useState(false)
    const [handleMap, setHandleMap] = useState(new Map(romanEmperors.map(data => [data.id, data.name])))

    
    
    function handleClick(id: number, name: string){ // player selection
        setPlayerName(prev => ({...prev, id: id, name: name})) 
        setShowConfirmButton(prev => true) // confirm button
        buttonNuller(false) // set button to null while confirming choice 
    }

    //update map after selecting player
    function updateConfirmMap(id: number){
        setHandleMap(prev => { 
            const updated = new Map(prev)
            updated.delete(id)
            return updated
        })
    }

    function handleConfirm(choice: boolean){ // player confirmation
        const playerValues = {id: playerName.id, name: playerName.name}

        if(choice){ 
                buttonNuller(true) // switch buttons on
                setSwitchPlayers(prev => !prev) 
                setShowConfirmButton(prev => false)  

                updateConfirmMap(playerValues.id)

                if(switchPlayers){ // sets player 1 name
                    teamPlayers(playerValues.name, true)
                } 
                else if(switchPlayers === false){ // sets player 2 name
                    teamPlayers(playerValues.name, false)
                    updateConfirmMap(playerValues.id)
                }
        }
        else if(!choice){ // handle no
            setShowConfirmButton(prev => false)
            buttonNuller(true)
        }
    }

    return(

            <div>
                <div className="player-section-relative">

                    <SelectPlayers 
                        handleSelect={handleClick}
                        switchPlayer={switchPlayers}
                        mapPlayers={handleMap}
                        nullButtons={buttonNullValue}
                    />
                
                    <ConfirmPlayer 
                        confirmName={playerName.name} 
                        confirmChoice={handleConfirm} 
                        confirmButton={showConfirmButton}
                    />

                </div>
                
            </div>
    )
}