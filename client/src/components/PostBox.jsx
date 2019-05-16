import React, { useContext, useEffect } from 'react';
import { Store } from "../Store";
import PostCard from "./PostCard";

import { fetchPosts } from "../helpers/api";

const PostBox = () => {

    const { state, dispatch } = useContext(Store);

    let postsCards = () => {
        console.log("postsCards() ran");
        if(state.posts.length >= 1) {
            return state.posts.map(post =>{
                return <PostCard post={post}/>
            })
        }
    };

    let posts = postsCards();

    // Todo: Refactor so useEffect only calls functions
    useEffect(async () => {
        let fetchedPosts = await fetchPosts();
        dispatch({ type: 'INITIALISE_STATE', payload: fetchedPosts });
        posts = postsCards();
    }, []);

    useEffect(() => {
        posts = postsCards();
    }, [state.posts]);

    return (
        <div>
            <ul>
                { posts }
            </ul>
        </div>
    )
};

export default PostBox;