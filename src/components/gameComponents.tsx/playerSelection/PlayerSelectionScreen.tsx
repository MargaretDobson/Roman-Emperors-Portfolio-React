import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"
import ConfirmPlayer from "./ConfirmPlayer"
import romanEmperors from "../../../data"

type FinishedSelection = {
    finalSelection: (finished: boolean) => void;
    playerOne: React.Dispatch<React.SetStateAction<{name: string;}>>;
    playerTwo: React.Dispatch<React.SetStateAction<{name: string;}>>;
}

export default function PlayerSelectionScreen({finalSelection, playerOne, playerTwo}: FinishedSelection){
    // passed to team
    
    const [switchPlayers, setSwitchPlayers] = useState(true)

    // passed to player select
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [selectPlayer, setSelectPlayer] = useState(false)
    const [handleMap, setHandleMap] = useState(new Map(romanEmperors.map(data => [data.id, data.name])))

    // passed to confirm
     const [buttonIsNull, setButtonIsNull] = useState(false)
    
    function handleClick(id: number, name: string){ // player selection
        setPlayerName(prev => ({...prev, id: id, name: name})) 
        setSelectPlayer(prev => !prev) // confirm button
        setButtonIsNull(prev => true) // set button to null while confirming choice 
        
    }

    function handleConfirm(choice: boolean){ // player confirmation

        const playerList = (id: number) => {
            setHandleMap(prev => { // delete player from map
                const updated = new Map(prev);
                updated.delete(id);
                return updated;
            })
        }

        if(choice){ 
                setButtonIsNull(prev => false) // set button to null
                setSwitchPlayers(prev => !prev) 
                setSelectPlayer(prev => false)  

                const teamAssumption = (name: string) => {
                    if(switchPlayers) { // sets player 1 name
                        playerOne(prev => ({...prev, name}));``
                    } 
                    else if(!switchPlayers){ // sets player 2 name
                        playerTwo(prev => ({...prev, name: name}))
                    }
                }
        }

        else if(!choice){ // handle no
            setButtonIsNull(prev => true)
        }
    }

    function handleTeamConfirm(){
       finalSelection(true)

    }


    return(

            <div>
                <SelectPlayers 
                    handleSelect={handleClick}
                    switchPlayer={switchPlayers}
                    mapPlayers={handleMap}
                    nullButtons={buttonIsNull}
                />
                {/* <TeamOne 
                    playerOne={selectPlayerOne.name}
                    playerTwo={selectPlayerTwo.name}
                    choosePlayer={selectPlayer}
                    confirmTeam={handleTeamConfirm}
                /> */}
                <ConfirmPlayer 
                    confirmName={playerName.name} 
                    confirmChoice={handleConfirm} 
                    choosePlayer={selectPlayer}
                />
            </div>
    )
}