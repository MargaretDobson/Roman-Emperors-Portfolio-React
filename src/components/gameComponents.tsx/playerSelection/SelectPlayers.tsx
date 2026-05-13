type ConfirmProps = {
    switchPlayer: boolean;
    handleSelect: (id: number, name: string) => void;
    handleSwitch?: () => void;
    mapPlayers: Map<number, string>;
    nullButtons: boolean;
}

export default function SelectPlayers({switchPlayer, handleSelect, mapPlayers, nullButtons}: ConfirmProps){
    
    
    return (

        <div>
            {switchPlayer ? 
                <div>
                    <button 
                        className="btn-white"
                    >Select your first Player
                    </button> 
                </div>    
            : null}
            {!switchPlayer ? 
                <div>
                    <button 
                        className="btn-white">Select your second Player
                    </button>
                </div>
            : null}

            {[...mapPlayers].map(
                 ([id, name]) => (
                    <div key={id}> 
                        <button
                        className={ !nullButtons ? "btn-grad" : "btn-null"}
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