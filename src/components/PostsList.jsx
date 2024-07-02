import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";
import Modal from "./Modal";

export default function Postlist({ isPosting, onStopPosting }){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    return (
        <>
            {isPosting ? (
            <Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPosts={addPostHandler} />
            </Modal> 
            ) : false}
            {posts.length > 0 ? (
            <ul className={styles.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul>
            ) : false}
            {posts.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There is no post yet.</h2>
                </div>
            ) : false}
        </>
    );
}