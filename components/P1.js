import React , {Component} from "react";

class P1 extends Component{

    constructor(props){
        super(props)

        this.state={
            name:"Pratik",
            mobile:""
        }

        alert("hi")
    }

handleChange = (e) => {
    this.setState({mobile:e.target.value})
}

render(){

    return(
        <>
        <input placeholder="Enter your Mobile" onChange={this.handleChange} />
        <h1>This is my class component</h1>
        <h1>{this.state.name}</h1>
        </>
    )
}

}

export default P1