import React, { Component } from 'react';
import { PostContext } from '../Contexts';
import axios from 'axios';

class PostProvider extends Component {
    state = {
        items: [],
    };

    fetchPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            const posts = res.data;
            console.log(posts);
            this.setState({
                items: posts,
            });
        });
    };

    createPost = (postData) => {
        console.log('createPost', postData);
        axios
            .post(`https://jsonplaceholder.typicode.com/posts`, {
                headers: { 'content-type': 'application/json' },
                data: postData,
            })
            .then((res) => {
                const posts = this.state.items;
                const post = res.data.data;
                post.id = res.data.id;
                posts.unshift(post);
                console.log(res);
                this.setState({
                    items: posts,
                });
            });
    };

    componentWillMount() {
        console.log('componentWillMount');
        this.fetchPosts();
    }

    render() {
        console.log('render');
        return (
            <PostContext.Provider
                value={{
                    state: this.state,
                    fetchPosts: () => this.fetchPosts(),
                    createPost: (postData) => this.createPost(postData),
                }}
            >
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

export default PostProvider;
