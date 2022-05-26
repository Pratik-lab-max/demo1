import React from "react";

import {useLocation} from 'react-router-dom'

function View(){

    // var {state} = useLocation() 
    // console.log(state)
    const locdata = useLocation()
    console.log(locdata.state)

     return(
        <>
        {/* <h3>This is view page</h3> */}
       
        <h1>{locdata.state.id}</h1>
        <h1>{locdata.state.title}</h1>
        <h1>{locdata.state.userId}</h1>
        
        </>
     )
}

export default View