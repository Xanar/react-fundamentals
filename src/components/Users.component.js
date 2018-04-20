import React, { Component } from 'react';
import User from './Users/User.component';
import UniqueId from 'react-html-id';

class Users extends Component {
    constructor() {
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            Users: [
                {
                    id: this.nextUniqueId(),
                    name: 'John',
                    age: '20',
                },
                {
                    id: this.nextUniqueId(),
                    name: 'Jane',
                    age: '19',
                },
                {
                    id: this.nextUniqueId(),
                    name: 'Peter',
                    age: '33',
                },
            ],
        };
    }

    deleteUser = (index, ev) => {
        const users = Object.assign([], this.state.Users);
        users.splice(index,1);
        this.setState({
            Users: users,
        });
    };

    changeUserName = (id, ev) => {
        const users = Object.assign([], this.state.Users);
        const index = this.state.Users.findIndex((user) => {
            return user.id === id;
        });
        users[index].name = ev.target.value;
        this.setState({
            Users: users,
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.Users.map((user, index) => {
                        return (
                            <User
                                key={user.id}
                                deleteUser={this.deleteUser.bind(this, index)}
                                changeUserName={this.changeUserName.bind(
                                    this,
                                    user.id,
                                )}
                                age={user.age}
                                name={user.name}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Users;
