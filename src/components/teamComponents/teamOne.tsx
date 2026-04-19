type ConfirmPlayerProps = {
  playerName?: string;
  confirmID?: number;
  confirmChoice?: boolean;
};


export default function TeamOne({playerName, confirmID, confirmChoice}: ConfirmPlayerProps) {

    

    return(
        <div>
            <div>{confirmChoice ? <div>{playerName}</div> : "Player 1"}</div>
            <div>{confirmChoice ? <div>{playerName}</div> : "Player 2"}</div>
        </div>
    )
}