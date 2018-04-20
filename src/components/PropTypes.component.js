import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Test = (props) => {
    return (
        <div>
            <h1>{props.str}</h1>
            <br />
            <h1>{props.bool ? 'Bool:True' : 'Bool:False'}</h1>
            <br />
            <h1>{props.strOrNum}</h1>
            <br />
            <h1>
                {props.arr.map((val) => {
                    return <li key={val}>{val}</li>;
                })}
            </h1>
            <br />
            <h1>
                {props.arrOfObj.map((val) => {
                    return (
                        <li key={val.name}>
                            Name: {val.name}, Age: {val.age}
                        </li>
                    );
                })}
            </h1>
            <h1>{props.children}</h1>
        </div>
    );
};

Test.propTypes = {
    str: PropTypes.string,
    bool: PropTypes.bool,
    strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    arr: PropTypes.arrayOf(PropTypes.number),
    arrOfObj: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
        }),
    ),
    children: PropTypes.element,
};

class PropTypesComponent extends Component {
    render() {
        return (
            <div className="container">
                <Test
                    str={'React Prop Types'}
                    bool={true}
                    strOrNum={10}
                    arr={[1, 2, 3]}
                    arrOfObj={[
                        { name: 'John', age: 21 },
                        { name: 'Peter', age: 19 },
                    ]}
                >
                    <div>Children</div>
                </Test>
            </div>
        );
    }
}

export default PropTypesComponent;
