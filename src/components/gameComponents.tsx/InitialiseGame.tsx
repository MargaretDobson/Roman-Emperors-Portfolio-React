//component initially rendered when playing
import "./buttons.css"
import "./gameboard.css"

type ConfirmPlay = {
    screenProgress: () => void;
    openRules: () => void
}


export default function InitialiseGame({screenProgress, openRules}: ConfirmPlay){
    return(
        <>
            <div>
                <div>Right To Rule</div>
                <p>Can you defeat the other emperors and earn the right to rule?</p>
                <button
                    onClick={screenProgress}
                    className="btn-grad"
                >Play</button>
                <button
                    className="btn-grad"
                    onClick={openRules}
                >Rules</button>
            </div>
        </>
    )
}