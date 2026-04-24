type ConfirmPlayerProps = {
  playerOne?: string;
  playerTwo?: string;
  switchPlayer: boolean;
};


export default function TeamOne({playerOne, playerTwo, switchPlayer}: ConfirmPlayerProps) {

    return(
        <div>
            <div>
                <p>Player 1</p>
                {playerOne}
            </div>

            <div>
                <p>Player 2</p>
                {playerTwo}
            </div>
        </div>
    )
}