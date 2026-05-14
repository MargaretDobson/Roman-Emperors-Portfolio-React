type ConfirmPlayerProps = {
  confirmName: string;
  confirmChoice: (choice: boolean, id?: number, name?: string) => void;
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
                        className="btn-grad"
                        onClick={handleYes}
                    >Yes</button>
                    <button
                        className="btn-grad"
                        onClick={handleNo}
                    >No</button>
                    <p className="fontcolour">{"Select " + confirmName + "?"}</p>
                </div>
            : null}
            </div>      
        </div>
    )
}