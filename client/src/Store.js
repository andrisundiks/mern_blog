import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
    posts: [
        {
            "date": "2019-05-11T17:22:03.635Z",
            "_id": "5cd704becf86673a68008a0d",
            "title": "Testing number one",
            "body": "Lore ipsum... errrr... aguvasg dfbhsdn bsdfb sd dsfobnsd fberhb",
            "tags": "first cool supercool",
            "desc": "This is the first entry, yeah",
        }
    ],
    formTitle: "",
    formDesc: "",
    formBody: "",
    formTags: "",
};

function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_TITLE':
            return { ...state, formTitle: action.payload };
        case 'CHANGE_DESC':
            return { ...state, formDesc: action.payload };
        case 'CHANGE_BODY':
            return { ...state, formBody: action.payload };
        case 'CHANGE_TAGS':
            return { ...state, formTags: action.payload };
        case 'ADD_POST':
            fetch('/api/posts/new/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": state.formTitle,
                    "desc": state.formDesc,
                    "body": state.formBody,
                    "tags": state.formTags
                })
            })
                .then(newPost => {
                    return { ...state, posts: [ ...state.posts, newPost ] }
                })
                .catch(err => console.log(err));
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <Store.Provider value={value}>
            { props.children }
        </Store.Provider>
    )
}