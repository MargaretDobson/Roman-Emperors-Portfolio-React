import PlayerSelectionScreen from "./playerSelection/PlayerSelectionScreen"
//import RandomPlayer from "./playerSelection/RandomPlayer"
import Rules from "./Rules"
//import TeamOne from "./teamComponents/teamOne"
import InitialiseGame from "./InitialiseGame"
import { useState } from "react"
import "./buttons.css"
import "./gameboard.css"
//game board that renders

export default function Game(){

    const [selectPlayerScreen, setSelectPlayerScreen] = useState(true)
    const [screenProgression, setScreenProgression] = useState(null)
    const [viewRules, setViewRules] = useState(false)

    function handleSelection(finished: boolean){
        if(finished){
            setSelectPlayerScreen(false)
        }
    }

    function handleScreenProgression(){
        
    }

    function handleRules(){
        setViewRules(prev => (prev ? prev : true))
    }

    return(
        <div className="container">
            <div className="gameboard">
                <div>
                    {/* header placeholder */}
                    
                    <InitialiseGame 
                        screenProgress={handleScreenProgression}
                        openRules={handleRules}
                    />
                
                    <Rules
                        screenProgress={handleScreenProgression}
                    />
                    
                    {selectPlayerScreen ?
                        <PlayerSelectionScreen
                        finalSelection={handleSelection}
                    /> 
                    : null}
                    {/* footer placeholder */}
                </div>
            </div>
        </div>    
    )
}