// future plans to make this into a mini game.
import SelectPlayers from "../playerSelection/SelectPlayers"
import PlayerSelectionScreen from "../playerSelection/PlayerSelectionScreen"

export default function Game(){
    return(
        <div>
            <SelectPlayers />
            <PlayerSelectionScreen/>
        </div>
        
    )
}