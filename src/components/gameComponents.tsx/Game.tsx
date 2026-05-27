import PlayerSelectionScreen from "./playerSelection/PlayerSelectionScreen"
import RandomPlayer from "./playerSelection/RandomPlayer"
// import Rules from "./Rules"
import TeamOne from "./teamComponents/teamOne"
import ConfirmTeam from "./playerSelection/ConfirmTeam"
// import InitialiseGame from "./InitialiseGame"
import { useState } from "react"
import "./buttons.css"
import "./gameboard.css"
//game board that renders

export default function Game(){
    // team one's initialisers
    const [selectPlayerScreen, setSelectPlayerScreen] = useState(true)
    const [buttonIsNull, setButtonIsNull] = useState(false)


    const [selectPlayerOne, setSelectPlayerOne] = useState({name: ""})
    const [selectPlayerTwo, setSelectPlayerTwo] = useState({name: ""})

    //confirm team button
    const [confirmTeam, setConfirmTeam] = useState(false)

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
        else if(switchval === false){
            setSelectPlayerTwo(prev => ({...prev, name: name}))
            handleConfirmTeam(true) // triggers confirm screen
            handleButtonNull(false)
        } 

    }

    function handleConfirmTeam(confirm: boolean){
        setConfirmTeam(prev => true)
    }

    function handleButtonNull(isnull: boolean){
        if(isnull){
            setButtonIsNull(prev => false)
        }
        else if(!isnull){
            setButtonIsNull(prev => true)
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
                            buttonNuller={handleButtonNull}
                            buttonNullValue={buttonIsNull}
                        /> 
                    : null}

                    <TeamOne 
                        playerOne={selectPlayerOne}
                        playerTwo={selectPlayerTwo}
                        confirmTeamPlayers={handleConfirmTeam}
                        buttonNuller={handleButtonNull}
                    />

                    {confirmTeam ? 
                        <ConfirmTeam 
                            playerOne={selectPlayerOne}
                            playerTwo={selectPlayerTwo}
                        />
                    : null}

                    <RandomPlayer/>

                    {/* footer placeholder */}
                </div>
            </div>
        </div>    
    )
}