import PlayerSelectionScreen from "../playerSelection/PlayerSelectionScreen"
import RandomPlayer from "../playerSelection/RandomPlayer"
import Rules from "./Rules"
import TeamOne from "../teamComponents/teamOne"
import InitialiseGame from "./InitialiseGame"
import { useState } from "react"
import "./buttons.css"
import "./gameboard.css"
//game board that renders

export default function Game(){

    const [selectPlayerScreen, setSelectPlayerScreen] = useState(true)
    const [screenProgression, setScreenProgression] = useState(0)
    const [viewRules, setViewRules] = useState(false)

    function handleSelection(finished: boolean){
        if(finished){
            setSelectPlayerScreen(false)
        }
    }

    function handleScreenProgression(){
        if(screenProgression === 0){
            setScreenProgression(prev => (prev === 0 ? 1 : prev))
        }
        else if(screenProgression === 1){
            setScreenProgression(prev => (prev === 1 ? 2 : prev))
        }
    }

    return(
        <div className="container">
            <div className="gameboard">
                <div>
                    {screenProgression === 0 ? 
                        <InitialiseGame 
                            screenProgress={handleScreenProgression}
                        />
                    : null}

                    {screenProgression === 1 ? 
                        <Rules
                            screenProgress={handleScreenProgression}
                        />
                    : null}
                    
                    {selectPlayerScreen && (screenProgression === 2) ?
                        <PlayerSelectionScreen
                        finalSelection={handleSelection}
                    /> 
                    : null}
                    <RandomPlayer/>
                </div>
            </div>
        </div>    
    )
}