type ConfirmPlayerProps = {
  playerName?: string;
  confirmID?: number;
  confirmChoice?: boolean;
  playerOne: (choice: boolean, name: string) => void;
  playerTwo: (choice: boolean, name: string) => void;
};


export default function TeamOne({playerOne, playerTwo, playerName, confirmChoice}: ConfirmPlayerProps) {

    

    return(
        <div>
            <div className="fontcolour">{confirmChoice ? 
                <p>{playerOne.name}</p> : 
                "Player 1"}</div>

            <div className="fontcolour">{confirmChoice ? 
                <p>{playerTwo.name}</p> : 
                "Player 2"}</div>
        </div>
    )
}