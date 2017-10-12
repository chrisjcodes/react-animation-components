import React from 'react';
import { node, umber } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export const getRandomDelay = (minDelay, maxDelay) => {
    const delay = Math.round(Math.random() * maxDelay);
    return delay >= minDelay ? delay : minDelay;
};

const Random = ({ children, minDelay, maxDelay, ...props }) => {
    return (
        <TransitionGroup appear {...props}>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    delay: `${getRandomDelay(minDelay, maxDelay)}ms`,
                })
            )}
        </TransitionGroup>
    );
};

Random.propTypes = {
    children: node.isRequired,
    minDelay: number,
    maxDelay: number,
};

Random.defaultProps = {
    minDelay: 0,
    maxDelay: 1500,
};

export default Random;
