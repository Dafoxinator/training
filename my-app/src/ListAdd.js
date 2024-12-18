import{useState} from "react";
const ListAdd = (props) =>{
    const[value,setValue]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(value)
        props.setList((prevList)=>{return[...prevList,value];})
        setValue("")
    }
    return(
        <div>
            <form onSubmit={submitHandler}> 
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button>add</button>
            </form>
        </div>
    );
}

export default ListAdd;