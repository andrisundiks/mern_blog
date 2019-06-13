
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
    fetch('api/users/login', {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: credentials.username,
            password: credentials.password
        })
    })
        .then(res => {
            if(res.success === "yo") {
                console.log(res)
            }
        })
        .catch(err => console.log(err))
};