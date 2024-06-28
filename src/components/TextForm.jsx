import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handlelowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
    }

    const txtChangeTo=(event)=>{
     setTextTo(event.target.value);
    }
    const txtChangeFrom=(event)=>{
     setTextFrom(event.target.value);
    }

    const txtReplace=()=>{
      let newrep=text.replaceAll(repFrom, repTo);
      setText(newrep);
    }
    const clearText=()=>{
      let newText="";
      setText(newText);
    }
  

    // const textSummery=()=>{
    //   let txtsummery=text.count();
    //   setText(txtsummery);
    // }
    const [text, setText]= useState('Enter the text here');
    const [repFrom, setTextFrom]= useState('from');
    const [repTo, setTextTo]= useState('to');
  return (

      <>
      <div>

  <div className="mb-3">
    <h2>{props.heading}</h2>
    <textarea
      className="form-control my-3"
      id="exampleFormControlTextarea1"
      rows={8}
      value={text}
      onChange={handleOnChange}
    />
   
  </div>
  </div>

  <div className="button-class">

  <div className='toUppercase mx-3'>
  <button className='btn btn-primary' onClick={handleUpClick}>convert to uppercase</button>
  </div>
  <div className="toLowercase">
    <button className="btn btn-primary" onClick={handlelowClick}>convert to lowercase</button>
  </div>
  <div className="replacetxt mx-3">
    <input className='from rep' type="text " value={repFrom} onChange={txtChangeFrom}  />
    <input className='to rep mx-2' type="text " value={repTo} onChange={txtChangeTo} />
    <button className="btn btn-primary mx-2" onClick={txtReplace} >Replace words</button>
  </div>
  <div className="clearTxt">
    <button className="btn btn-primary my-1" onClick={clearText}>Clear All</button>
  </div>

  </div>
  <div className="summery my-3">
    <h2>your text summery </h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
  </div>

  

</>


  )
}
