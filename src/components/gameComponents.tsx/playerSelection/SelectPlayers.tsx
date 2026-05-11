import romanEmperors from "../../../data";
import { useState } from "react";

type ConfirmProps = {
    switchPlayer: boolean;
    handleSelect: (id: number, name: string) => void;
    handleSwitch?: () => void;
    mapPlayers: Map<number, string>;
}

export default function SelectPlayers({switchPlayer, handleSelect, mapPlayers}: ConfirmProps){
    
    
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

            {[...mapPlayers].map(
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