import romanEmperors from "../data.ts";
import { useState } from "react";

export default function LearnMore({ident}: {ident: number}){
    const [displayInformation, setDisplayInformation] = useState(false) // sets whether ruler is displayed
    const [identifyRuler, setIdentifyRuler] = useState({id: 0})
    const [rulerDescription, setRulerDescription] = useState("")
    
    function handleClick(){ 
        const setIdent = ident // id passed from mother
        setIdentifyRuler({...identifyRuler, id: setIdent}) // setting id of ruler to be displayed
        const emporerDescription = new Map(romanEmperors.map(data => [data.id, data.description]))
        const correctID = emporerDescription.get(setIdent) // description

        setDisplayInformation(() => !displayInformation)
        setRulerDescription(correctID || "")

    }

    
    
    return (
        <div id="text">
            <div>
                <button
                    key={ident}
                    id="btn"
                    onClick={handleClick}
                    >
                        Learn More
                </button> 
            </div>
            {displayInformation ? <p>{rulerDescription}</p> : null}       
        </div>
    )
}
    