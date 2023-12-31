import React, { useState } from 'react'

export default function TeextForm(props) {
    let UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    let OnChange = (event) => {
        console.log("Enter the text 3")
        setText(event.target.value)
    }
    let loverCase = () => {
        let lover = text.toLowerCase();
        setText(lover)
    }
    let smallCapital = () => {
        let cap = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                cap += text[i].toLowerCase();
            } else {
                cap += text[i].toUpperCase();
            }
        }
        setText(cap);
    };
    let clearText = () => {
        let clear = '';
        setText(clear)
    }
    let CopyText=()=>{
        let textcopy=document.getElementById("myBox")
        textcopy.select()
        navigator.clipboard.writeText(textcopy.value)
    }
    const [text, setText] = useState(" ");
    return (
        <>
            <div>
                <div className="container mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
                    <h1 >{props.heading}</h1>
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={OnChange} rows="8"></textarea>
                    <button className="btn btn-primary my-2 mx-2" onClick={UpperCase}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={loverCase}>Convert to LoverCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={smallCapital}>Convert to oOoOoO</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={CopyText}>Copy</button>
                </div>
                <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                    <h1>Count Later and words</h1>
                    <p><b>{text.split(" ").length}</b> words <b>{text.length}</b> character</p>
                    <p><b>{0.008 * text.split(" ").length}</b> to read the words per minute</p>
                </div>
            </div>
        </>
    )
}
