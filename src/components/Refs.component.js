import React, { Component } from 'react';

const CustomInputComp = (props) => {
    return (
        <div className="row">
            <div>
                <span>Custom Input:</span>
                <input ref={props.customInputCompRef} type="text" />
                <input type="submit" value="submit" onClick={props.onClick1} />
            </div>
        </div>
    );
};

class Refs extends Component {
    onClick = () => {
        console.log('First Name:', this.firstName.value);
        console.log('Last Name:', this.lastName.value);
        console.log('Age:', this.age.value);
    };
    onKeyUp = (next, e) => {
        if (e.keyCode === 13) {
            this[next].focus();
        }
    };
    onClick1 = () => {
        this.customInputCompRef.focus();
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <span>First Name:</span>
                        <input
                            ref={(input) => {
                                this.firstName = input;
                            }}
                            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
                            type="text"
                        />
                    </div>
                    <div>
                        <span>Last Name:</span>
                        <input
                            ref={(input) => {
                                this.lastName = input;
                            }}
                            onKeyUp={this.onKeyUp.bind(this, 'age')}
                            type="text"
                        />
                    </div>
                    <div>
                        <span>Age:</span>
                        <input
                            ref={(input) => {
                                this.age = input;
                            }}
                            onKeyUp={this.onKeyUp.bind(this, 'submit')}
                            type="text"
                        />
                    </div>
                    <br />
                    <div>
                        <input
                            type="submit"
                            value="submit"
                            ref={(input) => {
                                this.submit = input;
                            }}
                            onClick={this.onClick}
                        />
                    </div>
                </div>
                <br />
                <br />
                <CustomInputComp
                    customInputCompRef={(input) => {
                        this.customInputCompRef = input;
                    }}
                    onClick1={this.onClick1}
                />
            </div>
        );
    }
}

export default Refs;
