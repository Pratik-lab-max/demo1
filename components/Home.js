import React, {useState} from 'react'

// Declare a new state variable, which we'll call "count"

export default function Home(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "Success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "Success")
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "Success")
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <h1 className="container">Enter the text to Analyze Below</h1>
        <div className="container" style={{color: props.mode==='dark'?'white':'blue'}}>
            <div mb-3="true">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: 
            props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'blue'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className = "btn btn-primary my-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className = "btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className = "btn btn-primary mx-1 my-3" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container" my-3="true" style={{color: props.mode==='dark'?'white':'blue'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to Preview"}</p>
        </div>
        </>
  )
}
