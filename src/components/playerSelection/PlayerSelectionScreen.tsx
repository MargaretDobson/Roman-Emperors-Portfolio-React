import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"

export default function PlayerSelectionScreen(){
    const [selectPlayerOne, setSelectPlayerOne] = useState()
    const [selectPlayerTwo, setSelectPlayerTwo] = useState()
    const [teamMemberSelect, setTeamMemberSelect] = useState(true)

    function handleTeamMember(){
        setTeamMemberSelect(prev => !prev)
        console.log(teamMemberSelect)
    }

    return(

            <div>
                <SelectPlayers 
                    switchPlayer={teamMemberSelect}
                    buttonDisplay={handleTeamMember}
                />
                <TeamOne/>
            </div>
    )
}