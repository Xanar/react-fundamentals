import React, { Component } from 'react';
import PostForm from './ContextApi/PostForm.component';
import Posts from './ContextApi/Posts.component';
import PostProvider from './ContextApi/Provider/PostProvider';

class ContextApi extends Component {
    render() {
        return (
            <PostProvider>
                <div>
                    <PostForm />
                    <hr />
                    <Posts />
                </div>
            </PostProvider>
        );
    }
}

export default ContextApi;
