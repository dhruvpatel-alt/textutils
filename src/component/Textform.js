import React,{useState} from 'react'
export default function Textform(props) {
  function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(/\s+/).filter((element)=>{return element.length!==0}).length;
 }
  function countcharacter(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");

    return str.length;
 }
  const [text, settext] = useState('');
  const uppercaseclick=()=>{
    
    let newText=text.toUpperCase();
    settext(newText);
    props.showalert("Upper case successfully","success")
    }
 
  const lowercaseclick=()=>{
    let newText=text.toLowerCase();
    settext(newText);
    props.showalert("LOWER case successfully","success")
    }
  const clearclick=()=>{
    let newText='';
    settext(newText);
    props.showalert("Clear text successfully","success")
    }
  const copyclick=()=>{
    document.querySelector("textarea").select();
    document.execCommand('copy');
    props.showalert("Copy text successfully","success")

  }
  const removespaceclick=()=>{
    let newText=text.split(/[ ]+/);
    settext(newText.join(' '));
    props.showalert("Remove space successfully","success")

    }
    const handleonchange=(event)=>{
  
        settext(event.target.value);
    }
   
    return (
      <>
        <div className="container my-2">
            <h4 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h4>
<div className="mb-3">
  {/* <label for="mybox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" onChange={handleonchange} value={text} placeholder="ENTER TEXT HERE" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
  <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" style={{color:props.mode==='light'?'black':'white'}} onClick={uppercaseclick}>convert to uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" style={{color:props.mode==='light'?'black':'white'}} onClick={lowercaseclick}>convert to lowercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-2 my-1" style={{color:props.mode==='light'?'black':'white'}}  onClick={clearclick}>clear text</button>
  <button disabled={text.length===0} className="btn btn-dark mx-2 my-1"  onClick={copyclick}>copy text</button>
  <button disabled={text.length===0} className="btn btn-light mx-2 my-1" onClick={removespaceclick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
          <h5>YOUR TEXT SUMMARY</h5>
          <p>TOTAL WORDS:{countWords(text)} AND CHARACTER:{countcharacter(text)}</p>
          <p>{0.05*countcharacter(text)} seconds to read this approx</p>
          <h3>PREVIEW</h3>
           <p>{text.length>0?text:"Enter somethig to preview it"}</p>
        </div>
        </>
    )
}

