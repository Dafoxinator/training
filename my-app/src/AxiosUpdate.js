import{useEffect, useState} from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";
import AxiosGetDemo from "./AxiosGetDemo";

const AxiosUpdate = () => {

    const[posts,setPosts]=useState([]);

    const updateButton=async () =>{
        const userId = 50
        const id = 6
        const title = "update test";
        const body = "Updated information";
        //axios.get("https://jsonplaceholder.typicode.com/posts")
        const res = await axios.patch(`http://localhost:8000/posts/${id}`,{
                id: id,
                userId: userId,
                title: title,
                body: body
        })
        
    }
    return(
        <>
            <button onClick={updateButton}>Update test</button>
        </>
    );

}

export default AxiosUpdate;