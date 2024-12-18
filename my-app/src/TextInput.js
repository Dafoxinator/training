import React from "react";
import {useRef, useState} from "react";

const TextInput=()=>{

    let ref = useRef(0);
    const[text,setText] = useState("");

    function update(e){
        setText(e.target.value)
    }
       
    
    
    return(
        <div>
            <h1>{text}</h1>
            <input type="text" value={text} onChange={(e)=>update(e)}/>
        </div>
    );
    
};

export default TextInput;