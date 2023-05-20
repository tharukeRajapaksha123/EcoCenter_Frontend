import React from 'react';

const Loading = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '2em',
        color: 'blue',
    };

    return (
        <div style={style}>
            Loading...
        </div>
    );
}

export default Loading;
