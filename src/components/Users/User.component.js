import React from 'react';

const User = (props) => {
    return (
        <li>
            <span>
                Name:{props.name} , Age:{props.age}
            </span>
            <hr />
            <label>Change Name</label>
            <input
                onChange={props.changeUserName}
                value={props.name}
                placeholder="Change Name"
            />
            <hr />
            <button onClick={props.deleteUser}> Delete </button>
        </li>
    );
};

export default User;
