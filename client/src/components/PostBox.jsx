import React, { useContext, useEffect } from 'react';
import { Store } from "../Store";
import PostCard from "./PostCard";

const PostBox = () => {

    const { state } = useContext(Store);

    let postsCards = () => {
        console.log("postsCards() ran");
        return state.posts.map(post =>{
            return <PostCard post={post}/>
        })
    };

    return (
        <div>
            <ul>
                { postsCards() }
            </ul>
        </div>
    )
};

export default PostBox;