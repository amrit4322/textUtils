import React,{useState } from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upercase is added");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case !","success");
    }
    const handleLowClick=()=>{
        console.log("Lowercase is added");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case !","success");
    }
    const handleSpaces=()=>{
        console.log("Erasing spaces");
        let newText = text.split(/[ ]+/);
    
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed!","success");
    }

    const handleFirstToUpper=()=>{
        console.log("First Alphabet upper");
        let newText = text.split(". ").map(item=>item.trim());
        let newText2 = "";
        newText.forEach((elem)=>{
            console.log(elem.charAt(0).toUpperCase());
            newText2 += (elem.charAt(0).toUpperCase())+elem.slice(1)+". ";
            console.log(newText2)
           
    });
       setText(newText2);
       props.showAlert("First Character has been capitalized !","success");
    }

    const hanldeOnChange=(event)=>{
        console.log("On change");
       setText(event.target.value);
    }

    const [text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color:(props.mode==="dark")?"white":"black"}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={hanldeOnChange} style={{backgroundColor:(props.mode==="light")?"white":"gray" ,color:(props.mode==="dark")?"white":"black"}} id="myBox" rows="8" placeholder='Enter Text here'></textarea>
        </div>  
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleSpaces}>Erase extra spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleFirstToUpper}>Convert First Character upper</button>
    </div>
    <div className="container my-3" style={{color:(props.mode==="dark")?"white":"black"}} >
        <h2>Your text Summary</h2>
        <p> <b>{(text.trim()==="")?0:text.trim().split(/[ ]+/ ).length}</b> words and <b>{text.length}</b> characters</p>
        <p> {0.008*text.trim().split(/[ ]+/).length} Minutes Read</p>
        <h2> Preview</h2>
        <p>{(text.length>0)?text:"Enter something in the textbox above"}</p>
    </div>
    </>
  )
}
