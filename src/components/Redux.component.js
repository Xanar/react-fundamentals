import React, { Component } from 'react';
import Posts from './redux/Posts.component';
import PostForm from './redux/PostForm.component';
import { Provider } from 'react-redux';
import store from './redux/store';

class ReduxComponent extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <PostForm />
                    <hr />
                    <Posts />
                </div>
            </Provider>
        );
    }
}

export default ReduxComponent;
