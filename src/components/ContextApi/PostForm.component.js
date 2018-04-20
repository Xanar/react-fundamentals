import React, { Component } from 'react';
import { PostContext } from './Contexts';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit');
        // const post = {
        //     title: this.state.title,
        //     body: this.state.body,
        // };
        // return (
        //     <PostContext.Consumer>
        //         {(context) => context.createPost(post)}
        //     </PostContext.Consumer>
        // );
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="title"
                            className="form-control"
                            id="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <textarea
                            className="form-control"
                            id="body"
                            rows="3"
                            value={this.state.body}
                            onChange={this.onChange}
                        />
                    </div>
                    <PostContext.Consumer>
                        {(context) => (
                            <button
                                type="submit"
                                className="btn btn-default"
                                onClick={() =>
                                    context.createPost({
                                        title: this.state.title,
                                        body: this.state.body,
                                    })
                                }
                            >
                                Submit
                            </button>
                        )}
                    </PostContext.Consumer>
                </form>
            </div>
        );
    }
}

export default PostForm;
