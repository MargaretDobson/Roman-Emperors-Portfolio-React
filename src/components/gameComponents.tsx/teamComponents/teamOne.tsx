type ConfirmPlayerProps = {
  playerOne: {name: string};
  playerTwo: {name: string};
  confirmTeamPlayers: (confirm: boolean) => void;
};


export default function TeamOne({ playerOne, playerTwo, confirmTeamPlayers }: ConfirmPlayerProps) {

    function handleClick(){
        if(playerOne.name && playerTwo.name !== null){
            confirmTeamPlayers(true)
        }
        else if(playerOne.name && playerTwo.name === null){
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

            <button
                className="btn-white"
                onClick={handleClick}
            >Done</button>

        </div>
    )
}