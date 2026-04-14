// screen thats rendered on game board when selecting player
import romanEmperors from "../../data";
import { useState } from "react";

export default function PlayerSelectionScreen(){
const [playerName, setPlayerName] = useState({id: 0})
const [confirmMessage, setConfirmMessage] = useState(false)
const [playerOptions, setPlayerOptions] = useState("")


    function handleClick(id: number){
        //confirm message
        const rulerID = id
        setPlayerName(prev => ({...prev, id: rulerID}))
        const mapRulerName = new Map(romanEmperors.map(data => [data.id, data.name]))
        const correctName = mapRulerName.get(rulerID)
        
        setPlayerOptions(correctName || "")
        setConfirmMessage(!confirmMessage)
    }

    return(
            <div>
                {
                    romanEmperors.map(
                        ruler => ( //render players
                            <div>
                                
                                {confirmMessage ? 
                                <button
                                onClick={() => handleClick(ruler.id)}
                                >
                                {ruler.name}
                                </button> : 
                                <p>
                                    placeholder
                                </p>
                                }
                            </div>
                        )
                    )
                }
            </div>
    )
}