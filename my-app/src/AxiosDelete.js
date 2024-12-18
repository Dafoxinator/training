import{useEffect, useState} from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";
import AxiosGetDemo from "./AxiosGetDemo";

const AxiosDelete = () => {

    const[posts,setPosts]=useState([]);

    const deleteButton=async () =>{
        const userId = 50
        const id = 6
        const title = "update test";
        const body = "Updated information";
        //axios.get("https://jsonplaceholder.typicode.com/posts")
        const res = await axios.delete('http://localhost:8000/posts',{})
        
    }
    return(
        <>
            <button onClick={deleteButton}>Delete test</button>
        </>
    );

}

export default AxiosDelete;