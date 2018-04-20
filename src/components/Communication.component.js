import React, { Component } from 'react';
import Parent from './parentToChild/Parent.component';

class Communication extends Component {
    state = {
        title: 'Placeholder Title',
    };

    changeTitle = (newTitle) => {
        this.setState({ title: newTitle });
    };

    render() {
        return (
            <Parent
                doWhatever={() => this.changeTitle('New Title')}
                title={this.state.title}
            />
        );
    }
}

export default Communication;
