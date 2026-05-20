import { useState } from "react";

type ConfirmPlayerProps = {
  playerOne: {name: string};
  playerTwo: {name: string};
  confirmTeamPlayers: (confirm: boolean) => void;
  buttonNuller: (isnull: boolean) => void;
};


export default function TeamOne({ playerOne, playerTwo, confirmTeamPlayers }: ConfirmPlayerProps) {
    const [showDone, setShowDone] = useState(false)

    function handleNullPlayer(){
        if(playerOne.name && playerTwo.name !== null){
            confirmTeamPlayers(true)
        }
        else if(playerOne.name || playerTwo.name === null){
            confirmTeamPlayers(false)
        }
    }

    return(
        <div >
            <div className="fontcolour">
                <p>Player 1</p>
                <p>{playerOne.name}</p> 
            </div>

            <div className="fontcolour">
                <p >Player 2</p>
                <p>{playerTwo.name}</p> 
            </div>


            {/* Done button */}

            {showDone ? 
            
                <button
                    className="btn-white"
                    onClick={handleNullPlayer}
                >Done</button>
        
            : null}

            

        </div>
    )
}