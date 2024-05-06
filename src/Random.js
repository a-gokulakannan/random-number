import { useState } from "react"
function RandomNumber()
{
    var [randomnumber,setrandom] = useState(null)

    function random()
    {
        setrandom(Math.floor(Math.random() * 100) + 1)
    }
    return(
        <div>
            <h1>{randomnumber}</h1>
            <button onClick={random}>Random Number</button>
        </div>
    )
}

export default RandomNumber