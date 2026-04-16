import { useState, useEffect } from "react"

export default function TeamOne({confirmedPlayer}) {
    const [playerOne, setPlayerOne] = useState("Player 1")
    const [playerTwo, setPlayerTwo] = useState("Player 2")

        useEffect(() => {
        if (!confirmedPlayer?.confirmed) return

        setPlayerOne(confirmedPlayer.name)
        }, [confirmedPlayer])

    return(
        <div>
            <p>{playerOne}</p>
            <p>{playerTwo}</p>
        </div>
    )
}