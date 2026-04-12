import romanEmperors from "../data.ts";
import { useState } from "react";
import LearnMore from "./LearnMore.tsx";

export default function TabButtons(){
    const [tabIsVisible, setTabIsVisible] = useState(false)
    const [idEmperor, setIdEmperor] = useState({id: 0});

    function handleClick(id: number){
        const setID = id
        setIdEmperor({...idEmperor, id: setID}) //bug here, not delaying state, fix by setting through function
        setTabIsVisible(!tabIsVisible)
    }

    const emperorData = new Map(romanEmperors.map(data => [data.id, data.id]))
    const positionTab = ["left", "right"]
    

    return(
        <> 
            <div className="timeline">
                {/* left */}
                <div key={romanEmperors[0].id} className="left"> 
                    <button 
                        id="btn"
                        onClick={() => handleClick(romanEmperors[0].id)} //ID passed to click here
                        >{romanEmperors[0].name}
                    </button>
                    {/* State set here */}
                    { tabIsVisible && idEmperor.id === romanEmperors[0].id ? 
                        <>
                            
                            <p>{romanEmperors[0].reign}</p>
                            <p>{romanEmperors[0].achievements}</p>
                            <div>
                                {<LearnMore ident={emperorData.get(romanEmperors[0].id)} />}
                            </div>
                        </> 
                    : null}
                </div> 
                
            </div>
        </>
    )
}