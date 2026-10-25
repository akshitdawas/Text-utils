import React, { useState } from 'react'

export default function Mode(props) {
    const [btntext, setBtnText] = useState("Enable Dark mode");

    const toggleStyle = () => {
        if (props.myStyle.color === "white") {
            props.setMyStyle({
                color: "black",
                backgroundColor: "white",
            });
            setBtnText("Enable Dark mode");
        } else {
            props.setMyStyle({
                color: "white",
                backgroundColor: "black",
            });
            setBtnText("Enable Light mode");
        }
    };

    return (
        <div className='container my-3' style={props.myStyle}>
            <button onClick={toggleStyle} className='btn btn-primary mx-2 my-2'>{btntext}</button>
        </div>
    );
}
