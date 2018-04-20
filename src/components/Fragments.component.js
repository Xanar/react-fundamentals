import React, { Component, Fragment } from 'react';

const Temp = () => {
    return (
        <Fragment>
            <h2>Hello</h2>
            <h3>Greetings</h3>
        </Fragment>
    );
};

class Fragments extends Component {
    render() {
        return (
            <div>
                <Temp />
            </div>
        );
    }
}

export default Fragments;
