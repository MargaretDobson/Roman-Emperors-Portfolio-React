import PlayerSelectionScreen from "./playerSelection/PlayerSelectionScreen"
//import RandomPlayer from "./playerSelection/RandomPlayer"
// import Rules from "./Rules"
// import TeamOne from "./teamComponents/teamOne"
// import InitialiseGame from "./InitialiseGame"
import { useState } from "react"
import "./buttons.css"
import "./gameboard.css"
//game board that renders

export default function Game(){
    // team one's initialisers
    const [selectPlayerScreen, setSelectPlayerScreen] = useState(true)
    const [selectPlayerOne, setSelectPlayerOne] = useState({name: ""})
    const [selectPlayerTwo, setSelectPlayerTwo] = useState({name: ""})
    const [teamOne, setTeamOne] = useState([{one: ""}, {two: ""}])

    const [screenProgression, setScreenProgression] = useState(null)
    const [viewRules, setViewRules] = useState(false)

    function handleSelection(finished: boolean){
        if(finished){
            setSelectPlayerScreen(false)
        }
    }

    function handlePlayers(){ // takes selected players from lifted state and sets them
        console.log(selectPlayerOne)
    }

    handlePlayers()

    function handleScreenProgression(){
        
    }

    // view rules
    function handleRules(){
        setViewRules(prev => (prev ? prev : true))
        const changeOverLay = () => ({
            zIndex: 10
        })
        return(changeOverLay)
    }

    return(
        <div className="container">
            <div className="gameboard">
                <div>
                    {/* header placeholder */}
                    
                    {/* <InitialiseGame 
                        screenProgress={handleScreenProgression}
                    />
                
                    <Rules
                        loadRules={viewRules}
                        handleViewRules={handleRules}
                    /> */}
                    
                    {selectPlayerScreen ?
                        <PlayerSelectionScreen
                        finalSelection={handleSelection}
                        playerOne={setSelectPlayerOne}
                        playerTwo={setSelectPlayerTwo}
                    /> 
                    : null}


                    {/* footer placeholder */}
                </div>
            </div>
        </div>    
    )
}