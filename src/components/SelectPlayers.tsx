import romanEmperors from "../data";

export default function SelectPlayers(){
    //game idea is simple, you have to beat the opposite team 
    // using your two player who have access to four types of move sets
    // each player is stronger in one type of move set etc. caligula is best
    // at "psychopath" moves. 
    // You must balance the two judges so that they both approve and allow you
    // to carry out the specified move. E.g. caligula makes move "poison your water system"
    // Aurelius does not approve but tiberius does aurelius blocks it, tiberius says go ahead
    // if one judge is stronger the move is blocked or approved
    // alexander the great is the final boss

    // qualities are psychopath, honour, intelligent, ruthless
    return (
        <div>
            <p>team 1</p>
            <p>team 2</p>
            <p>judges</p>
        </div>
    )
}