import{useEffect, useState} from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";
import AxiosGetDemo from "./AxiosGetDemo";

const AxiosPost = () => {

    const[posts,setPosts]=useState([]);

    const postButton=() =>{
        const userId = 2
        const id = 6
        const title = "Post test";
        const body = "testing post method";
        //axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.post("http://localhost:8000/posts",{
                id: id,
                userId: userId,
                title: title,
                body: body
        })
        
    }
    return(
        <>
            <button onClick={postButton}>Post test</button>
            
            
        </>
    );

}

export default AxiosPost;