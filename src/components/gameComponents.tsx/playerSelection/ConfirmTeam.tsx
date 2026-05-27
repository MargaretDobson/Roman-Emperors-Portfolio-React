type ConfirmPlayerProps = {
  playerOne: {name: string};
  playerTwo: {name: string};
};

export default function ConfirmTeam({ playerOne, playerTwo }: ConfirmPlayerProps){

    const handleYes = () => {"yes"}
    const handleNo = () => {"No"}

    
    return(
        <>
            
            <ul className="confirm-team">
                <p className="fontcolour">Confirm Team? </p>
                    <li>{playerOne.name}</li>
                    <li>{playerTwo.name}</li>
                <button className="btn-grad"
                    onClick={handleYes}>
                        Yes
                </button>
                <button className="btn-grad"
                    onClick={handleNo}>
                        No
                </button>
            </ul>
            
        </>
    )
}