import React , {useState} from "react";

const LeftRight = () => {
    var [input , setInput] = useState("")
    var [data, setData] = useState([])

const handleInput = (e) =>{
    setInput(e.target.value)
}

const handleSubmit = () => {
    var temp = data

    temp.push({name:input , position: 0})
    setData([...temp])
}

const handleLeft = (index) => {
    var temp = data
    temp[index].position =  temp[index].position -1
    setData([...temp])
}

const handleRight = (index) => {
    var temp = data
    temp[index].position =  temp[index].position +1
    setData([...temp])
}

return(
<>
    <h1>This is a project page </h1>
    <div style={{display:"flex" , justifyContent:"center"}}>        
        <input onChange={handleInput} placeholder="Enter any Name" />
        <br></br>
        <br></br>        
    </div>

    <div style={{display:"flex" , justifyContent:"center" , marginTop:10}}>         
        <button  class="btn btn-primary" onClick={handleSubmit}>Submit</button>  
    </div>     
    
    <br></br>
    <br></br>
<div className="Container">
    <div className = "row">
        <div style = {{border: '1px solid', textAlign:"center"}} class="col">
            <h3>Entry</h3>
            {data.map((value,index) =>(
                <>
                {value.position === 0 ? 
                <>
                 <button disabled onClick={()=>{handleLeft(index)}}>{`<`}</button>
                 <button>{index+1}&nbsp;{value.name}</button >
                 <button onClick={()=>{handleRight(index)}}>{`>`}</button>
                <br></br>
                <br></br>
                </>
                : null}
                </>
            ))}
        </div>

        <div style = {{border: '1px solid', textAlign:"center"}} class="col">
            <h3>Beginners</h3>
            {data.map((value,index) =>(
                <>
                {value.position === 1 ? 
                <>
                 <button onClick={()=>{handleLeft(index)}}>{`<`}</button>
                 <button>{index+1}&nbsp;{value.name}</button >
                 <button onClick={()=>{handleRight(index)}}>{`>`}</button>
                <br></br>
                <br></br>
                </>
                : null}
                </>
            ))}
        </div>

        <div style = {{border: '1px solid', textAlign:"center"}} class="col">
            <h3>Intermediate</h3>
            {data.map((value,index) =>(
                <>
                {value.position === 2 ? 
                <>
                 <button onClick={()=>{handleLeft(index)}}>{`<`}</button>
                 <button>{index+1}&nbsp;{value.name}</button >
                 <button onClick={()=>{handleRight(index)}}>{`>`}</button>
                <br></br>
                <br></br>
                </>
                : null}
                </>
            ))}
        </div>

        <div style = {{border: '1px solid', textAlign:"center"}} class="col">
            <h3>Perfect</h3>
            {data.map((value,index) =>(
                <>
                {value.position === 3 ? 
                <>
                 <button onClick={()=>{handleLeft(index)}}>{`<`}</button>
                 <button>{index+1}&nbsp;{value.name}</button >
                 <button disabled onClick={()=>{handleRight(index)}}>{`>`}</button>
                <br></br>
                <br></br>
                </>
                : null}
                </>
            ))}
        </div>
    </div>
</div>
</>
)

}

export default LeftRight