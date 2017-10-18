import React from 'react';

const styles = {
    margin: '2em',
    display: 'flex',
    justifyContent: 'center',
};

const AppDecorator = storyFn => {
    return <div style={styles}>{storyFn()}</div>;
};

export default AppDecorator;
