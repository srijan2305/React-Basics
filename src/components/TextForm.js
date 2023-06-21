
import React, {useState} from 'react';




export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const handleClearClick=()=>{
        let newText=''
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }
    const handleCopy = ()=>{
        console.log('I am copy');
        var text =document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }
    const handleExtraSpaces = ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces!", "success")
    }
    const [text, setText] = useState('');
    // setText('new text')
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
 
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
    color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
    <button className='btn btn-success mx-2'onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-success mx-2' onClick={handleExtraSpaces}>extra space</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
