import React, { Component } from 'react';

class LifCycle extends Component {
    constructor() {
        super();
        this.state = {
            name: 'John',
            childName: 'Jane',
        };
        console.log('Parent Constructor');
    }

    componentWillMount() {
        if (window.innerWidth < 1000) {
            this.setState({
                innerWidth: window.innerWidth,
            });
        }
        console.log('Parent - componentWillMount');
    }

    componentDidMount() {
        console.log('Parent - componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('Parent - componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Parent - shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('Parent - componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Parent - componentWillUpdate');
        console.log('   prevProps:', prevProps);
        console.log('   prevState:', prevState);
    }

    componentWillUnmount() {
        console.log('Parent - componentWillUnmount');
    }

    changeState() {
        console.log('Change State Event');
        this.setState({
            name: 'Jack',
            childName: 'Jill',
        });
    }

    unmountChild() {
        console.log('Unmount Child Event');
        this.setState({
            childName: 'unmount',
        });
    }

    render() {
        console.log('Parent - render');
        return (
            <div>
                Parent name:{this.state.name} | window-width:{
                    this.state.innerWidth
                }
                {(() => {
                    if (this.state.childName !== 'unmount')
                        return <Child name={this.state.childName} />;
                })()}
                <button onClick={this.changeState.bind(this)}>
                    Change State
                </button>
                <button onClick={this.unmountChild.bind(this)}>
                    Unmount Child
                </button>
            </div>
        );
    }
}

class Child extends Component {
    constructor() {
        super();
        console.log('   => Child Constructor');
    }

    componentWillMount() {
        console.log('   => Child - componentWillMount');
    }

    componentDidMount() {
        console.log('   => Child - componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('   => Child - componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('   => Child - shouldComponentUpdate');
        return false;
    }

    componentWillUpdate() {
        console.log('   => Child - componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('   => Child - componentWillUpdate');
        console.log('           prevProps:', prevProps);
        console.log('           prevState:', prevState);
    }

    componentWillUnmount() {
        console.log('   => Child - componentWillUnmount');
    }

    render() {
        console.log('   => Child - render');
        return <div>Child name:{this.props.name}</div>;
    }
}

export default LifCycle;
