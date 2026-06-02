import { useState } from "react";

type ConfirmPlayerProps = {
  playerOne: {name: string};
  playerTwo: {name: string};
};

export default function ConfirmTeam({ playerOne, playerTwo }: ConfirmPlayerProps){
    const [ teamConfirmed, setTeamConfirmed ] = useState(false)

    const handleYes = () => {setTeamConfirmed(prev => true)}
    const handleNo = () => {setTeamConfirmed(prev => true)}

    
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

            { teamConfirmed &&
                <div>
                    <p>Players:</p>
                    <li>{playerOne.name}</li>
                    <li>{playerTwo.name}</li>
                </div>
            }

            {/* reset selection for now */}
            { !teamConfirmed &&
                <div>

                </div>
            }
            
        </>
    )
}