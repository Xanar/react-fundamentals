import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './actions/postActions';
import PropTypes from 'prop-types';

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

        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        this.props.createPost(post);
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

                    <button type="submit" className="btn btn-default">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
