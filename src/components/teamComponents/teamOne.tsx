type ConfirmPlayerProps = {
  playerOne?: string;
  playerTwo?: string;
  switchPlayer: boolean;
};


export default function TeamOne({playerOne, playerTwo, switchPlayer}: ConfirmPlayerProps) {

    

    return(
        <div>
            <div>
                {switchPlayer ? 
                <p>{playerOne}</p> : 
                "Player 1"}
            </div>

            <div>{!switchPlayer ? 
                <p>{playerTwo}</p> : 
                "Player 2"}
            </div>
        </div>
    )
}