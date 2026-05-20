type ConfirmPlayerProps = {
  playerOne: {name: string};
  playerTwo: {name: string};
};

export default function ConfirmTeam({ playerOne, playerTwo }: ConfirmPlayerProps){

    const handleYes = () => {console.log("yes")}
    const handleNo = () => {"No"}

    
    return(
        <>
            <p>Confirm Team? </p>
            <ul>
                <li>{playerOne.name}</li>
                <li>{playerTwo.name}</li>
                <button
                    onClick={handleYes}
                >Yes</button>
                <button
                    onClick={handleNo}
                >No</button>
            </ul>
            
        </>
    )
}