import React, {useState} from 'react'

export default function Textform(props) {
  const handleOnChange = (event) =>{
    // console.log("On Change");
    setText(event.target.value)
  }

  const handleUpClick = () =>{
    // console.log("Upper Case Clicked"+ text);
    let newText = text.toUpperCase();

    setText(newText)
  }

  const handleLoClick =() =>{
    let newText2= text.toLowerCase();
    setText(newText2)
  }

  const handleClearClick= () =>{
    let clearword = '';
    setText(clearword);
  }

  const handleCopy= () =>{
    var copyText = document.getElementById("exampleFormControlTextarea1");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Text Copied :-"+ copyText.value);
  }

  const handleRemoveSpacesy= () =>{
    let newText = text.split(/[  ]+/)
    setText(newText.join(' '));
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className="container">
      <div className="mb-3">
        <div className="my-3">
         <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white' }} onChange={handleOnChange} value={text } rows="8"></textarea>
        </div>
        <butoon className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To Uppercase</butoon>
        <butoon className="btn btn-primary mx-1" onClick={handleLoClick} >Convert To Lowercase</butoon>
        <butoon className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</butoon>
        <butoon className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</butoon>
        <butoon className="btn btn-primary mx-1" onClick={handleRemoveSpacesy} >Remove Extra Spaces</butoon>
      </div>
    </div>
    <div className="container">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and characters is {text.length}</p>
      <p>{0.008 * text.split(" ").length} Time to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter above something to preview"}</p>
    </div>
    </div>
    </>
  )
}
