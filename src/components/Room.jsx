import React, { useState } from 'react'
import "./Room.css"

const Room = () => {
    const [isLit, setLit] = useState(true);

    return (
        <div className={isLit ? "lit" : "dark"} >
            <p>The room is {isLit ? "Lit" : "Not Lit"}</p>
            <button onClick={() => setLit(!isLit)}>{isLit ? "Off" : "On"}</button>
        </div>
    )
}

export default Room;