import {useRef} from "react";

const ClickCounter=()=>{

    let count = useRef(0);
    const click = () =>{
        count.current += 1;
        alert("The button has been clicked " + count.current + " times")
    }
    
    return(
        <div>
            <button onClick={click}>Click</button>
        </div>
    );
    
};

export default ClickCounter;
//<WrappedComponet {...props}/>