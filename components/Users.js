import React ,{useState} from "react";

function Users(){

    var [arr , setArr] = useState([{index : 0 ,value: ""}])

    const handleAddMore = (i) => {
        var temp = arr;
        temp.push({index:i + 1 , value:""})
        console.log(temp)
        setArr([...temp])
    }

    const handleInput = () => {

    }

    return(
        <>
        <h1>Users</h1>
        {arr.map((d, i)=>(
            <div style={{display:"flex" , flexdirection:"row" , justifyContent:"center"}}>
                <div style={{display:"flex" , flexdirection:"column" , width:"80%"}}>
                    <input onClick={handleInput} placeholder="Enter any value" value={d.value} style={{width:"80%" , alignSelf:"center"}} />
                </div>
                <br></br>
                <br></br>
                <div style={{display:"flex" , flexdirection:"column" , width:"20%"}}>
                    <button onClick={()=>{handleAddMore(i)}} style={{width:"80%", alignSelf:"center"}}>Add More {i}</button>
                </div>

            </div>
        ))}
        </>
    )
}

export default Users