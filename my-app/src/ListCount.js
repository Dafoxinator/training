import{useState} from "react";
const ListCount = (props) =>{
    
    return(
        <div>
            <h3>Total Elements: {props.list.length}</h3>
        </div>
    );
}

export default ListCount;