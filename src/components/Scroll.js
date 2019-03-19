import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'hidden', 'overflowY': 'scroll', border: '1px solid #EEE', height: '77vh'
        }}>
            {props.children}
        </div >
    );
};

export default Scroll;