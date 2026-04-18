type ConfirmPlayerProps = {
  confirmName?: string;
  confirmID?: number;
  confirmChoice?: boolean;
};


export default function TeamOne({confirmName, confirmID, confirmChoice}: ConfirmPlayerProps) {

    

    return(
        <div>
            <div>{confirmChoice ? <div>{confirmName}</div> : "Player 1"}</div>
            <div>{confirmChoice ? <div>{confirmName}</div> : "Player 2"}</div>
        </div>
    )
}