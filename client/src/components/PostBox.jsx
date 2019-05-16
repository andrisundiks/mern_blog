import React, { useContext, useEffect } from 'react';
import { Store } from "../Store";
import PostCard from "./PostCard";
import uuidv1 from 'uuid/v1';

import { fetchPosts } from "../helpers/api";

const PostBox = () => {

    const { state, dispatch } = useContext(Store);

    // Renders posts from the state.
    let postsCards = () => {
        console.log("postsCards() ran");
        if(state.posts.length >= 1) {
            return state.posts.map(post =>{
                return <PostCard post={post} key={uuidv1()} />
            })
        }
    };

    let posts = postsCards();

    const initialisePosts = async () => {
        let posts = await fetchPosts();
        dispatch({ type: 'INITIALISE_STATE', payload: posts });
    };

    // When component is mounted calls API to fetch posts
    // from database. Only runs once.
    useEffect( () => {
        initialisePosts();
        posts = postsCards();
    }, []);

    // Every time the posts the in state change, we rerender them.
    useEffect(() => {
        posts = postsCards();
    }, [state.posts]);

    return (
        <div className="container">
            <ul>
                { posts }
            </ul>
        </div>
    )
};

export default PostBox;