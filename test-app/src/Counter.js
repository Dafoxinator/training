const Counter = () =>{
    let count = useRef(0);
    const inc = () =>{
        count.current += 1;
        alert("The Count is currently " + count.current)
    }
    
    const dec = () =>{
        count.current -= 1;
        alert("The Count is currently " + count.current)
    }
    return(
        <div>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    );
    
};
    
