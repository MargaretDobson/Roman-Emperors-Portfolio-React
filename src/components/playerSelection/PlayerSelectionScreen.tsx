import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"
import ConfirmPlayer from "./ConfirmPlayer"

export default function PlayerSelectionScreen(){
    // passed to team
    const [selectPlayerOne, setSelectPlayerOne] = useState()
    const [selectPlayerTwo, setSelectPlayerTwo] = useState()
    const [teamMemberSelect, setTeamMemberSelect] = useState(true)
    // passed to player select
    const [playerName, setPlayerName] = useState({id: 0, name: ""})
    const [selectPlayer, setSelectPlayer] = useState(false)
    // passed to confirm
     const [confirmPlayer, setConfirmPlayer] = useState(false)
    
    function handleClick(id: number, name: string){ // player selection
        setPlayerName(prev => ({...prev, id: id, name: name})) 
        setSelectPlayer(prev => !prev)
    }
    
    
    function handleTeamMember(){
        setTeamMemberSelect(prev => !prev)
        console.log(teamMemberSelect)
    }

    function handleConfirm(choice: boolean){ // player confirmation
        if(choice){
            setConfirmPlayer(true)
        }
        else{
            setConfirmPlayer(false)
        }
    }

    return(

            <div>
                <SelectPlayers 
                    switchPlayer={teamMemberSelect}
                    handleSelect={handleClick}
                    handleSwitch={handleTeamMember}
                />
                <TeamOne 
                    playerName={playerName.name} 
                    confirmID={playerName.id} 
                    confirmChoice={confirmPlayer}
                />
                <ConfirmPlayer 
                    confirmName={playerName.name} 
                    confirmChoice={handleConfirm} 
                    choosePlayer={selectPlayer}
                />
            </div>
    )
}