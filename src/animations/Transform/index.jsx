import React from 'react';
import { node, object, string } from 'prop-types';
import { Transition } from 'react-transition-group';

import {
    defaultAnimationProps,
    getInlineStyles,
    getTimeoutValue,
} from 'utilities';

const Transform = ({ children, enterTransform, exitTransform, ...props }) => {
    const pos = {
        entering: exitTransform,
        entered: enterTransform,
        exiting: exitTransform,
        exited: exitTransform,
    };

    return (
        <Transition timeout={getTimeoutValue(props)} {...props}>
            {status => (
                <div
                    className={props.className}
                    style={{
                        ...getInlineStyles(props),
                        transform: pos[status],
                        transitionProperty: 'transform',
                        willChange: 'transform',
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

Transform.propTypes = {
    appear: bool,
    children: node.isRequired,
    className: string,
    delay: number,
    duration: number,
    enterTransform: string,
    exitTransform: string,
    style: object,
    timingFn: string,
};

Transform.defaultProps = {
    ...defaultAnimationProps,
    enterTransform: 'none',
    exitTransform: 'none',
};

export default Transform;
