// how to play, and rules

type RuleProps = {
    loadRules?: boolean;
    handleViewRules: () => void;
}

export default function Rules({loadRules, handleViewRules}: RuleProps){

    return(
        <>
            <ul>
                <li>Choose your two main characters you want to play as.
                    Each player has 4 different catagories they can fit into.
                    A tyrant character will be a lot more effective at 
                    pulling off a tyrant move. 
                </li>
                <li>
                    Your goal is to convince the two judges that your team 
                    is fit to rule the Roman Empire. All characters are immortal
                    and will likely rule the empire forever. 
                </li>
                <li>
                    If your character is a tyrant and pulls a tyrant move on a 
                    judge with the characteristic "Noble" the judge is less 
                    likely to side with you.
                </li>
                <li>
                    <button
                        onClick={handleViewRules}
                    >Back</button>
                </li>
                <li></li>
            </ul>
        </>
    )
}