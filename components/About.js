import React , {useState} from 'react'

import {testData} from './data'

import {useNavigate} from 'react-router-dom'

function About(){

    console.log(testData)
    const navigate = useNavigate()
    const  [data  , setData ] =  useState(testData)

    const handleInput = (e) => {
      if(e.target.value === "")
      {
        // alert("Box is empty")
        setData(testData)
      }
      for (let i = 0 ; i < testData.length ; i ++)
      {
        if (testData[i].id == e.target.value)
        {
          setData([testData[i]])
          break;
        }
      }
    }

    const handleButton = (x) =>{
      console.log(x)
      navigate('/view' , {state : x})
    }

    return(
    <>

    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">Search here</span>
      <input type="text" class="form-control" onChange={handleInput} id="basic-url" aria-describedby="basic-addon3"/>
    </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">User Id</th>
      <th scope="col">Customer Id</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <>

    {Array.isArray(data) && data.length > 0 ? 
    <>
    {data.map((x,i)=>(
         <tr>
         <th scope="row">{i+1}</th>
         <td>{x.userId}</td>
         <td>{x.id}</td>
         <td>{x.title}</td>
         <td style = {{color: x.completed  === true ? "#0000e6" : "red"}}>
                     {x.completed  === true ? "Completed" : "Not Completed"}</td>
         <td><button onClick={()=>{handleButton(x)}} style={{border:"0px" , backgroundColor: "transparent"}}>
                                  <ion-icon name="arrow-redo-outline"></ion-icon></button></td>
       </tr>
    ))}  
    </> : null}

   </>
  </tbody>
</table>
        </>
    )
}

export default About    