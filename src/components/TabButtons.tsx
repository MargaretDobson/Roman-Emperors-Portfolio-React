import romanEmperors from "../data.ts";
import { useState } from "react";
import LearnMore from "./LearnMore.tsx";

export default function TabButtons(){
    const [tabIsVisible, setTabIsVisible] = useState(false)
    const [idEmperor, setIdEmperor] = useState({id: 0});

    function handleClick(id: number){
        setIdEmperor((prev => ({...prev, id: id}))) 
        setTabIsVisible(prev => !prev);
    }

    return(
        <> 
            <div className="timeline">
                <div>
                    {
                        romanEmperors.map( //conditionally render content
                            ruler => (
                                // conditionally show position on timeline
                                <div className={ruler.id % 2 ? "left" : "right"}> 
                                    <button 
                                        key={ruler.id}
                                        id="btn"
                                        onClick={() => handleClick(ruler.id)}
                                        >{ruler.name}
                                    </button>
                                    {/* State set here */}
                                    { tabIsVisible && idEmperor.id === ruler.id ? 
                                        <div>
                                            <p>{ruler.reign}</p>
                                            <p>{ruler.achievements}</p>
                                            <div>
                                                {<LearnMore ident={ruler.id} />}
                                            </div>
                                        </div> 
                                        : null}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}