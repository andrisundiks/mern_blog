import React, {createContext, useReducer} from 'react';

export const Store = createContext();

const initialState = {
    posts: [],
    formTitle: "",
    formDesc: "",
    formBody: "",
    formTags: "",
};

function reducer(state, action) {
    switch(action.type) {
        case 'INITIALISE_STATE':
            return { ...state, posts: action.payload };
        case 'CHANGE_TITLE':
            return { ...state, formTitle: action.payload };
        case 'CHANGE_DESC':
            return { ...state, formDesc: action.payload };
        case 'CHANGE_BODY':
            return { ...state, formBody: action.payload };
        case 'CHANGE_TAGS':
            return { ...state, formTags: action.payload };
        case 'ADD_POST':
            return { ...state, posts: [ ...state.posts, action.payload ]};
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