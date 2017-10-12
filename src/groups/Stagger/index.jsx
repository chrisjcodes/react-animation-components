import React from 'react';
import { node, number } from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

export const getStaggerDelay = (idx, props) => {
    if (props.chunk) {
        return (idx % props.chunk) * props.delay;
    }
    return idx * props.delay;
};

const Stagger = ({ children, ...props }) => {
    return (
        <TransitionGroup appear {...props}>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    delay: `${getStaggerDelay(i, props)}ms`,
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
    chunk: 0,
};

export default Stagger;
