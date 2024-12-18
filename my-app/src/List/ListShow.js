import{useState} from "react";
const ListShow = (props) =>{
    return(
        <div>
            <h3>To Do List</h3>{
            props.list.map((item)=>(
                <li key={item}>{item}</li>
            ))
        }
        </div>
    );
}

export default ListShow;