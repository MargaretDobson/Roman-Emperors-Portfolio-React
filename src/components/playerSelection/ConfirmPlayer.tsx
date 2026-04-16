type ConfirmPlayerProps = {
  confirmName: string;
  confirmChoice: (choice: boolean) => void;
  choosePlayer: boolean;
};

export default function ConfirmPlayer({confirmName, confirmChoice, choosePlayer}: ConfirmPlayerProps){
    const handleYes = () => confirmChoice(true)
    const handleNo = () => confirmChoice(false)
    return(
        <div>
            <div>
                {/* confirm player */}
                { choosePlayer ? // confirmation logic
                <div>
                    <button
                        onClick={handleYes}
                    >Yes</button>
                    <button
                        onClick={handleNo}
                    >No</button>
                    <p>{"Select " + confirmName + "?"}</p>
                </div>
            : null}
            </div>      
        </div>
    )
}