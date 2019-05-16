
export const fetchPosts = async () => {
    return await fetch('https://sheltered-tundra-58407.herokuapp.com/api/posts', {
        method: 'get',
    })
        .then(res => res.json())
        .then(posts => {
            return posts
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