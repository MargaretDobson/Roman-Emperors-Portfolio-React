import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"
import ConfirmPlayer from "./ConfirmPlayer"

export default function PlayerSelectionScreen(){
    // passed to team
    const [selectPlayerOne, setSelectPlayerOne] = useState({name: ""})
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

    function handlePlayerOne(choice: boolean){
        console.log("Player 1")
        // if confirm is true set this one to the player name
        if(choice){
            setSelectPlayerOne(prev => ({...prev, name: playerName}))
        }
        
    }

    function handlePlayerTwo(choice: boolean, name: string){
        console.log("Player 2")
        if(choice){
            setSelectPlayerTwo(() => {name})
        }
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
                    confirmChoice={confirmPlayer}
                    playerOne={handlePlayerOne}
                    playerTwo={handlePlayerTwo}
                />
                <ConfirmPlayer 
                    confirmName={playerName.name} 
                    confirmChoice={handleConfirm} 
                    choosePlayer={selectPlayer}
                />
            </div>
    )
}