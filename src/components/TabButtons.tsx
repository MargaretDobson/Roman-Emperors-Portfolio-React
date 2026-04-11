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

    function handleLearnMore(id: number){
        const placeHolder1 = id

    }

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
                            <div>{<LearnMore learnMore={idEmperor.id}/>}</div>
                            
                        </> 
                    : null}
                </div> 
                {/* right */}
                <div key={romanEmperors[1].id} className="right"> 
                    <button 
                        id="btn"
                        onClick={() => handleClick(romanEmperors[1].id)} //ID passed to click here
                        >{romanEmperors[1].name}
                    </button>
                    {/* State set here */}
                    { tabIsVisible && idEmperor.id === romanEmperors[1].id ? 
                        <>
                            
                            <p>{romanEmperors[1].reign}</p>
                            <p>{romanEmperors[1].achievements}</p>
                            <div>{<LearnMore learnMore={idEmperor.id}/>}</div>
                        </> 
                    : null}
                </div>

                <div className="center">
                    <div className="line"></div>
                </div>

                {/* left */}
                {/* <div key={romanEmperors[2].id} className="left">
                    <button 
                    id="btn"
                    onClick={() => handleClick(romanEmperors[2].id)}
                    >{romanEmperors[2].name}</button>

                    { tabIsVisible && idEmperor.id === romanEmperors[2].id ? 
                        <><p>About the name</p> <p>{romanEmperors[2].reign}</p></> 
                    : null}
                </div>

                {/* right */}
                {/* <div key={romanEmperors[3].id} className="right">
                    <button 
                    id="btn"
                    onClick={() => handleClick(romanEmperors[3].id)}
                    >{romanEmperors[3].name}</button>

                    { tabIsVisible && idEmperor.id === romanEmperors[3].id ? 
                        <><p>About the name</p> <p>{romanEmperors[3].reign}</p></> 
                    : null}
                </div> */} 
                
            </div>
        </>
    )
}