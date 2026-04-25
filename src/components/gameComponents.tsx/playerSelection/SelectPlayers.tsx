import romanEmperors from "../../../data";

type ConfirmProps = {
    switchPlayer: boolean;
    handleSelect: (id: number, name: string) => void;
    handleSwitch?: () => void;
}

export default function SelectPlayers({switchPlayer, handleSelect}: ConfirmProps){
    
    return (

        <div>
            {switchPlayer ? 
                <div>
                    <button 
                        className="btn-basic-grad"
                    >Select your first Player
                    </button> 
                </div>    
            : null}
            {!switchPlayer ? 
                <div>
                    <button 
                        className="btn-basic-grad">Select your second Player
                    </button>
                </div>
            : null}

            {romanEmperors.map(
                ruler => ( 
                    <div key={ruler.id}> 
                        <button
                        className="btn-grad"
                        // id of button passed to click handler here
                        onClick={() => handleSelect(ruler.id, ruler.name)}
                        id="button"
                        >{ruler.name}</button>           
                    </div>                   
                )
            )}     
        </div>
    )
}