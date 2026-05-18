import "./team-style.css"

type ConfirmPlayerProps = {
  
};


export default function TeamOne({}: ConfirmPlayerProps) {

    

    return(
        <div >
            <div className="fontcolour">
                <p>Player 1</p>
                <p>{}</p> 
            </div>

            <div className="fontcolour">
                <p >Player 2</p>
                <p></p> 
            </div>

        </div>
    )
}