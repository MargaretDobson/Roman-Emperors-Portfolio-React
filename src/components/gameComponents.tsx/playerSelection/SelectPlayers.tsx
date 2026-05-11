import romanEmperors from "../../../data";
import { useState } from "react";

type ConfirmProps = {
    switchPlayer: boolean;
    handleSelect: (id: number, name: string) => void;
    handleSwitch?: () => void;
}

export default function SelectPlayers({switchPlayer, handleSelect}: ConfirmProps){
    const [handleMap, setHandleMap] = useState(new Map(romanEmperors.map(data => [data.id, data.name])))

    function handleDelete(handleSelect){
        console.log(handleSelect)
    }
    
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

            {[...handleMap].map(
                 ([id, name]) => (
                    <div key={id}> 
                        <button
                        className="btn-grad"
                        // id of button passed to click handler here
                        onClick={() => handleSelect(id, name)}
                        id="button"
                        >{name}</button>           
                    </div> 
                 ) 
                )
            }
        </div>
    )
}