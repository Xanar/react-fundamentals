import React from 'react';
import Child from './Child.component';

const Parent = (props) => {
    return <Child {...props} />;
};

export default Parent;
