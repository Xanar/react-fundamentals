import React, { Component } from 'react';
import { PostContext } from './Contexts';

class Posts extends Component {

    render() {
        const postItems = (
            <PostContext.Consumer>
                {(context) =>
                    context.state.items.map((post) => {
                        return (
                            <div key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        );
                    })
                }
            </PostContext.Consumer>
        );

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

export default Posts;
