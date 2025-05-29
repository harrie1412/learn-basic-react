import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import GoBack from "../../component/GoBack";

function BlogDetail(){
    const param = useParams();
    const [post, setPost] = useState();
    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${param.id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            });
    },[]);
    console.log(post);
    return(
        <>
        <GoBack/>
        {post &&
            <>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
            </>
        }
        </>
    );
}
export default BlogDetail;