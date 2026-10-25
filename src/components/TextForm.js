import React, { useState } from 'react'

export default function TextForm(props) { // useState hook is always in array form 
    const [text, setText] = useState('enter your text here');
    /* test="hello world " wrong way to change state */
    /*setText("hello world ")/* right way to change state  */


    // jb "uppercase" vaala button dabega toh neeche vaali line run hogi....
    // function handleUpClick ke andar jo likha hai usse... function handleUpClick ko call karne se jo change aana hai use define kiya gaya hai.....    
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleloClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!", "success");
    }

    // jb hum textarea mein likhna chalu karenge toh handleOnChange vaala function run hoga....
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1> {/* heading ko uppercase me convert kiya hai..... */}
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">kuch bhi likh lo.......</label>
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleloClick}>Lowercase</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
