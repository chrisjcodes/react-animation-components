import React from 'react';
import { node, object, string } from 'prop-types';
import { Transition } from 'react-transition-group';

import {
    defaultAnimationProps,
    getInlineStyles,
    getTimeoutValue,
} from 'utilities';

const TweenTransform = ({ children, enter, exit, ...props }) => {
    const pos = {
        entering: exit,
        entered: enter,
        exiting: exit,
        exited: exit,
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

TweenTransform.propTypes = {
    appear: bool,
    children: node.isRequired,
    className: string,
    delay: number,
    duration: number,
    enter: string,
    exit: string,
    style: object,
    timingFn: string,
};

TweenTransform.defaultProps = {
    ...defaultAnimationProps,
    enter: 'none',
    exit: 'none',
};

export default TweenTransform;
