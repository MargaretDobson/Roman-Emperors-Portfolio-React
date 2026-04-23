import PlayerSelectionScreen from "../playerSelection/PlayerSelectionScreen"
import "./buttons.css"
import "./gameboard.css"
//game board that renders

export default function Game(){
    return(
        <div className="container">
            <div className="gameboard">
                <div>
                    <PlayerSelectionScreen/>
                </div>
            </div>
        </div>    
    )
}