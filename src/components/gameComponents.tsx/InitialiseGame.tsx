//component initially rendered when playing
import "./buttons.css"
import "./gameboard.css"

type ConfirmPlay = {
    screenProgress: () => void;
}


export default function InitialiseGame({screenProgress}: ConfirmPlay){
    return(
        <>
            <div>
                <div>Right To Rule</div>
                <p>Can you defeat the other emperors and earn the right to rule?</p>
                <button
                    onClick={screenProgress}
                    className="btn-grad"
                >Play</button>
            </div>
        </>
    )
}