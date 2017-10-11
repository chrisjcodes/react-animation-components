import React from 'react';
import { node, object, string } from 'prop-types';
import { Transition } from 'react-transition-group';

import { defaultAnimationProps, getInlineStyles } from '../utilities.js';

const TweenTransform = ({ children, start, finish, ...props }) => {
    const pos = {
        entering: start,
        entered: finish,
        exiting: finish,
        exited: start,
    };

    return (
        <Transition {...props}>
            {status => (
                <div
                    style={{
                        ...getInlineStyles(props),
                        transform: pos[status],
                        transitionProperty: 'transform',
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

TweenTransform.propTypes = {
    children: node.isRequired,
    start: string,
    style: object,
    finish: string,
};

TweenTransform.defaultProps = {
    ...defaultAnimationProps,
    start: 'none',
    finish: 'none',
};

export default TweenTransform;
