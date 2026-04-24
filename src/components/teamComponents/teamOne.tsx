import "./team-style.css"

type ConfirmPlayerProps = {
  playerOne: string;
  playerTwo: string;
  choosePlayer: boolean;
  confirmTeam: (finished: boolean) => void;
};


export default function TeamOne({playerOne, playerTwo, choosePlayer, confirmTeam}: ConfirmPlayerProps) {

    if(playerOne !== "" && playerTwo !== "" && !choosePlayer){
        confirmTeam(true)
    }

    return(
        <div >
            <div className="fontcolour">
                <p>Player 1</p>
                <p>{playerOne}</p> 
            </div>

            <div className="fontcolour">
                <p >Player 2</p>
                <p>{playerTwo}</p> 
            </div>

        </div>
    )
}