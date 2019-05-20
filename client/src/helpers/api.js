
export const fetchPosts = async () => {
    return await fetch('/api/posts', {
        method: 'get',
    })
        .then(res => res.json())
        .then(posts => {
            return posts;
        })
        .catch(err => console.log(err));
};

export const postNewPost = async (newPost) => {
    fetch('/api/posts/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
        .then(resPost => {
            return resPost
        })
        .catch(() => { return null });
};

export const loginUser = async (credentials) => {
    fetch('api/login', {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
        .then(res => { return res })
        .catch(err => console.log(err))
};