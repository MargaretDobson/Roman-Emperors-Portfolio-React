import "./team-style.css"

type ConfirmPlayerProps = {
  playerOne: {name: string};
  playerTwo: {name: string};
};


export default function TeamOne({ playerOne, playerTwo }: ConfirmPlayerProps) {

    

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

        </div>
    )
}