import PlayerSelectionScreen from "../playerSelection/PlayerSelectionScreen"
import "./game.css"
//game board that renders

export default function Game(){
    return(
        <div className="container">
            <div className="box">
                <PlayerSelectionScreen/>
            </div>
        </div>
        
    )
}