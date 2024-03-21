import { Link } from "react-router-dom"

export const NotFound = ()=>{
    return(
        <>
            <h1>NotFound</h1>
            <span>Return to <Link to="">home</Link></span>
        </>
    )
}