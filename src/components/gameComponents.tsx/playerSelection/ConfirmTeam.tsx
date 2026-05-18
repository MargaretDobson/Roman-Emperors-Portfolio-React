type ConfirmPlayerProps = {
  playerOne: {name: string};
  playerTwo: {name: string};
};

export default function ConfirmTeam({ playerOne, playerTwo }: ConfirmPlayerProps){


    
    return(
        <>
            <p>Confirm Team? </p>
            <ul>
                <li>{playerOne.name}</li>
                <li>{playerTwo.name}</li>
                <button>Yes</button>
                <button>No</button>
            </ul>
            
        </>
    )
}