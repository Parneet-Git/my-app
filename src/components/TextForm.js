import React, {useState} from 'react'

export default function TextForm(props) {

    // HOOKS
    // text : stateVariable, setText : func to change text
    const [text, setText] = useState('');

    // to change the text to upperCase
    const upperCase = ()=>{
        let textInBox = text.toUpperCase();
        setText(textInBox);
        props.showAlert('Text converted to upper case!', 'success');
    }

    const lowerCase = ()=>{
        let textInBox = text.toLowerCase();
        setText(textInBox);
        props.showAlert('Text converted to lower case!', 'success');
    }

    // speak functionality
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    //to extract only the numbers in the text:
    const handleNumExtract =()=>{
        const regex = /[0-9/ /]/g;
        const digits = text.match(regex);
        const res = digits.join('');
        setText(res);
        props.showAlert('All Numbers has been extracted!', 'success');
    };

    // Copy Text
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied!', 'success');

    }

    // to handle the change in state of text
    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

  return (
      <>
        <div>
            <h1 className={`text-${((props.mode === 'light')?'dark':'light')}`}>{props.heading}</h1>
            <div className={`mb-3 my-3 text-${((props.mode === 'light')?'dark':'light')}`}>
                <textarea className={`form-control text-${((props.mode === 'light')?'dark':'light')} bg-${props.mode}`} value={text} onChange={onChangeHandler} id="myBox" rows={props.rows}></textarea>
                <button className="btn btn-primary border-0 my-3" onClick={upperCase} style={{backgroundColor:props.btnColor}}>Convert to Upper-Case</button>
                <button className="btn btn-primary border-0 my-3 ms-3" onClick={lowerCase} style={{backgroundColor:props.btnColor}}>Convert to Lower-Case</button>
                <button type="submit" onClick={speak} className="btn btn-primary border-0 mx-2 my-2" style={{backgroundColor:props.btnColor}}>Speak</button>
                <button type='submit' onClick={handleNumExtract} className="btn btn-primary border-0" style={{backgroundColor:props.btnColor}}>Extract Nums</button>
                <button type='submit' onClick={handleCopy} className="btn btn-primary border-0 ms-2" style={{backgroundColor:props.btnColor}}>Copy Text</button>
            </div>
        </div>
        <div className={`container text-${((props.mode === 'light')?'dark':'light')}`}>
            <h1>Your Text Summary</h1>
            <p>{text.trim().split(' ').length} words and {text.length} characters</p>
            <p>{Math.ceil(0.008 * text.trim().split(' ').length)} minutes to read this text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter you text to preview"}</p>
        </div>
    </>
  )
}
