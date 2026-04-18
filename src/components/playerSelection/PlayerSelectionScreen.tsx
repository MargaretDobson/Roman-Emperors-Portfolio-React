import SelectPlayers from "./SelectPlayers"
import TeamOne from "../teamComponents/teamOne"
import { useEffect } from "react"

export default function PlayerSelectionScreen(){

    return(
            <div>
                <p>Choose your team</p>
                <SelectPlayers />
                <TeamOne/>
            </div>
    )
}