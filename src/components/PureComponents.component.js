import React, { PureComponent } from 'react';
const Temp = (props) => {
    console.log('Temp - render');
    return <h1>{props.val}</h1>;
};
class PureComponents extends PureComponent {
    constructor() {
        super();
        this.state = {
            val: 1,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                val: 1,
            });
        }, 2000);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('  => Prev State - ', this.state);
    //     console.log('  => Next State - ', nextState);
    //     return this.state.val === nextState.val ? true : false;
    // }
    render() {
        console.log('App - render');
        return (
            <div>
                <Temp val={this.state.val} />
            </div>
        );
    }
}

export default PureComponents;
