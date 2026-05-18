import PlayerSelectionScreen from "./playerSelection/PlayerSelectionScreen"
//import RandomPlayer from "./playerSelection/RandomPlayer"
// import Rules from "./Rules"
import TeamOne from "./teamComponents/teamOne"
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
    const [teamOne, setTeamOne] = useState({one: "", two: ""})

    const [screenProgression, setScreenProgression] = useState(null)
    const [viewRules, setViewRules] = useState(false)

        // view rules
    function handleRules(){
        setViewRules(prev => (prev ? prev : true))
        const changeOverLay = () => ({
            zIndex: 10
        })
        return(changeOverLay)
    }


    function handlePlayers(name: string, switchval: boolean){ // takes selected players from lifted state and sets them
        if(switchval){
            setSelectPlayerOne(prev => ({...prev, name: name}))
        }
        else if(switchval){
            setSelectPlayerTwo(prev => ({...prev, name: name}))
        } 
    }



    return(
        <div className="container">
            <div className="gameboard">
                <div>
                    {/* header placeholder */}
                    
                    {selectPlayerScreen ?
                        <PlayerSelectionScreen
                            teamPlayers={handlePlayers}
                        /> 
                    : null}

                    <TeamOne />

                    {/* footer placeholder */}
                </div>
            </div>
        </div>    
    )
}