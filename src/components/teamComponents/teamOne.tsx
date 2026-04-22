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
            <div>{confirmChoice ? 
                <div>{playerOne.name}</div> : 
                "Player 1"}</div>

            <div>{confirmChoice ? 
                <div>{playerTwo.name}</div> : 
                "Player 2"}</div>
        </div>
    )
}