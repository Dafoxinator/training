import{useState} from "react";
import ListAdd from "./ListAdd";
import ListShow from "./ListShow";
import ListCount from "./ListCount";
const ToDoList = () =>{
    const[list,setList]=useState([]);
    /*const submitHandler=(e)=>{
        e.preventDefault();
        console.log(value)
        StyleSheetList((prevList)=>{return[...prevList,value];})
        console.log(list)
        setValue("")
    }*/
    return(
        <div>
            
            <ListShow list={list}/>
            <ListAdd setList={setList}/>
            <ListCount list={list}/>
            
        </div>
    );
}
//lift state up, break into idividual components
export default ToDoList;