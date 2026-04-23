import romanEmperors from "../../data";

type ConfirmProps = {
    switchPlayer: boolean;
    handleSelect: (id: number, name: string) => void;
    handleSwitch: () => void;
}

export default function SelectPlayers({switchPlayer, handleSelect, handleSwitch}: ConfirmProps){
    
    return (

        <div>
            {switchPlayer ? <p className="fontcolour">Select your first Player</p> : null}
            {!switchPlayer ? <p className="fontcolour">Select your second Player</p> : null}
            {romanEmperors.map(
                ruler => ( 
                    <div> 
                        <button
                        className="btn-grad"
                        key={ruler.id}
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