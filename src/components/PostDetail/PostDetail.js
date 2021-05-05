import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const [post,setPost] = useState({})
    const [comments,setComments] = useState([])
    const {id} = useParams();

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])

    return (
        <div>
        <h1>this is post Detail : {id}</h1>
        <h5>user posted :{post.id} </h5>
        <p>title {post.title}</p>
           <p>Number of comments : {comments.length}</p>
           {
               comments.map(comment => <Comments comment={comment}></Comments>)
           }    
         </div>
    );
};

export default PostDetail;