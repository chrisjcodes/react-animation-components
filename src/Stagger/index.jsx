import React from 'react';
import { node, number } from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

const Stagger = ({ children, chunk, delay, ...props }) => {
    const getDelay = idx => {
        if (chunk) {
            return (idx % chunk) * delay;
        }
        return idx * delay;
    };

    return (
        <TransitionGroup appear {...props}>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    delay: `${getDelay(i)}ms`,
                })
            )}
        </TransitionGroup>
    );
};

Stagger.propTypes = {
    children: node,
    chunk: number,
    delay: number,
};

Stagger.defaultProps = {
    delay: 100,
};

export default Stagger;
