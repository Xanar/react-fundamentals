import { Fetch_Posts, New_Post } from './types';
import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
        const posts = res.data;
        dispatch({
            type: Fetch_Posts,
            payload: posts,
        });
    });
};

export const createPost = (postData) => (dispatch) => {
    axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
            headers: { 'content-type': 'application/json' },
            data: postData,
        })
        .then((res) => {
            dispatch({
                type: New_Post,
                payload: res.data.data,
            });
        });
};
