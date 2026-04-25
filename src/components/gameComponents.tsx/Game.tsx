import PlayerSelectionScreen from "../playerSelection/PlayerSelectionScreen"
import RandomPlayer from "../playerSelection/RandomPlayer"
import TeamOne from "../teamComponents/teamOne"
import { useState } from "react"
import "./buttons.css"
import "./gameboard.css"
//game board that renders

export default function Game(){

    const [selectPlayerScreen, setSelectPlayerScreen] = useState(true)

    function handleSelection(finished: boolean){
        if(finished){
            setSelectPlayerScreen(false)
        }
    }

    return(
        <div className="container">
            <div className="gameboard">
                <div>
                    {selectPlayerScreen && 
                        <PlayerSelectionScreen
                        finalSelection={handleSelection}
                    />}



                    <RandomPlayer/>
                    
                </div>
            </div>
        </div>    
    )
}