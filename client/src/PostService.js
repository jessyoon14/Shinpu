import axios from 'axios';

const url = 'http://localhost:8000/api/posts/';

class PostService {
    //get Posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }

    //Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }
    //Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;