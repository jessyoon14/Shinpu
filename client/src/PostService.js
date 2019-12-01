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
    //get history
    static getHistory() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}retrievehistory`);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        Date: post.createdAt,//new Date(post.createdAt),
                        //...post,
                        p1: post.p1,
                        p2: post.p2,
                        p3: post.p3,
                        p4: post.p4,
                        p5: post.p5,
                        p6: post.p6,
                        p7: post.p7,
                        p8: post.p8,
                        p9: post.p9,
                        p10: post.p10
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
        const chosen = [];
        if (arr.length === 0) {
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            chosen.push(arr[i].text);
        }
        if (arr.length < 10) {
            for (let i = 0; i < 10 - arr.length; i++) {
                chosen.push("")
            }
        }
        // for (let i = 0; i < arr.length; i++) {
        //     const text = arr[i].text;
        //     axios.post(`${url}addchosen`, {
        //         text
        //     });
        // }
        // return;
        //fill in p1 ... to p10 to pass into DB

        return axios.post(`${url}addchosen`, {
            p1: chosen[0],
            p2: chosen[1],
            p3: chosen[2],
            p4: chosen[3],
            p5: chosen[4],
            p6: chosen[5],
            p7: chosen[6],
            p8: chosen[7],
            p9: chosen[8],
            p10: chosen[9],

        });
    }
}

export default PostService;