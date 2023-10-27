import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white",
    //     border:'1px solid white'
    // })

    let myStyle = {
        color:props.mode==='dark'?'white':'#3d6c9c',
        backgroundColor:props.mode==='dark'? '#3d6c9c':'white',
     
    }
    

   

  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-2'>About us</h1>
      <div className="accordion" id="accordionExample"  style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>  Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               Textutilsg gives you a way to analyze your text quickly and efficently. be it word count,character count or time to read
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. textutils reports the number of words
                and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software workis in any web browsers susch as Chrome, Firefor, Internet Explorer, Safari, Opera. IT suits to count characters in facebook, blog, books, excel document ,pdf document ,essay, etc.
            </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}
