import romanEmperors from "../data.ts";
import { useState } from "react";

export default function LearnMore({...learnMore}){
    const [emperorInformation, setEmperorInformation] = useState(false);

    function handleLearnMore(){
        setEmperorInformation(!emperorInformation)
        console.log(learnMore)
    }

    const descriptionDisplays = [
        romanEmperors[0].description,
        romanEmperors[1].description,
        romanEmperors[2].description,
        romanEmperors[3].description
    ]

    return(
        <>
            <div>
                <button
                    id="btn"
                    onClick={handleLearnMore}
                >Learn More</button>
                <div>
                    {emperorInformation ? descriptionDisplays[0] : null}
                </div>
            </div>
        </>
    )
}
    