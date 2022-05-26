import React , {useState , useEffect} from 'react'


function Register(){

  useEffect(()=>{

    console.log("Step-1")
      
      return(
          console.log("This is useEffect page")
      )

  },[])  

    var[inData , setData] = useState({
        name:"",
        age:"",
        mobile:"",
        email:"",
        password:"",
        address:""
    })

    const handleInput = (e) =>{
        setData({...inData , [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inData)
    }

return(
    <div style={{display:"flex" , justifyContent:"center"}}>
    <form>
        <div className="mb-3">
            <input type="text" value={inData.name} onChange={handleInput} placeholder="Enter your Name" class="form-control" id='name' name="name" aria-describedby="name"/>
        </div>

        <div className="mb-3">
            {/* <label for="age" class="form-label">Age</label> */}
            <input type="text" value={inData.age} onChange={handleInput} placeholder="Enter your Age" class="form-control" id='age' name="age"/>
        </div>

        <div className="mb-3">
            <input type="text" value={inData.mobile} onChange={handleInput} placeholder="Enter your Mobile" class="form-control" id='mobile' name="mobile"/>
        </div>

        <div className="mb-3">
            <input type="text" value={inData.email}onChange={handleInput} placeholder="Enter your Email" class="form-control" id='email' name="email"/>
        </div>

        <div className="mb-3">
            <input type="text" value={inData.password} onChange={handleInput} placeholder="Enter your Password" class="form-control" id='Password' name="password"/>
        </div>
        
        <div className="mb-3">
            <input type="text" value={inData.address} onChange={handleInput} placeholder="Enter your Address" class="form-control" id='address' name="address"/>
        </div>
        <button onClick={(e)=>{handleSubmit(e)}} className="btn btn-primary">Submit</button>
    </form>
    </div>

    )
    
}

export default Register