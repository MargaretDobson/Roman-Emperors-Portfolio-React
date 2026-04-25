import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"
import ConfirmPlayer from "./ConfirmPlayer"

type FinishedSelection = {
    finalSelection: (finished: boolean) => void;
}

export default function PlayerSelectionScreen({finalSelection}: FinishedSelection){
    // passed to team
    const [selectPlayerOne, setSelectPlayerOne] = useState({name: ""})
    const [selectPlayerTwo, setSelectPlayerTwo] = useState({name: ""})
    const [switchPlayers, setSwitchPlayers] = useState(true)
    // passed to player select
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [selectPlayer, setSelectPlayer] = useState(false)
    // passed to confirm
     const [confirmPlayer, setConfirmPlayer] = useState(false)
    
    function handleClick(id: number, name: string){ // player selection
        setPlayerName(prev => ({...prev, id: id, name: name})) 
        setSelectPlayer(prev => !prev)

        if(switchPlayers) { // sets player 1 switch
            setSelectPlayerOne(prev => ({...prev, name: name}))
        } 
        else if(!switchPlayers){ // sets player 2 switch
            setSelectPlayerTwo(prev => ({...prev, name: name}))
        }
        
    }

    function handleConfirm(choice: boolean){ // player confirmation
        if(choice){ // handle yes
            setConfirmPlayer(true)
            setSwitchPlayers(prev => !prev)
            setSelectPlayer(false) // sets confirm buttons to null after choice is made
        }
        else if(!choice){ // handle no
            setConfirmPlayer(false)
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
                />
                <TeamOne 
                    playerOne={selectPlayerOne.name}
                    playerTwo={selectPlayerTwo.name}
                    choosePlayer={selectPlayer}
                    confirmTeam={handleTeamConfirm}
                />
                <ConfirmPlayer 
                    confirmName={playerName.name} 
                    confirmChoice={handleConfirm} 
                    choosePlayer={selectPlayer}
                />
            </div>
    )
}