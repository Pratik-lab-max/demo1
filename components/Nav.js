import React from "react"
import { BrowserRouter,Link,Route } from "react-router-dom"

function Nav(){
    return(
        <div>
             <Link to='/'>Click to go Home</Link><br></br>
        <Link to ='/about' >click to go About</Link>
        </div>
    )
}
export default Nav