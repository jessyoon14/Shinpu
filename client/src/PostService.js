import axios from 'axios';

const url = 'http://localhost:8000/members/';

class PostService {
    //get Posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}retrieve`);
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
        return axios.post(`${url}addmember`, {
            text
        });
    }
    //Delete Post
    static deletePost(id) {
        return axios.delete(`${url}deletemember/${id}`);
    }

    static addChosen(arr) {
        for (let i = 0; i < arr.length; i++) {
            const text = arr[i].text;
            axios.post(`${url}addchosen`, {
                text
            });
        }
        return;
    }
}

export default PostService;