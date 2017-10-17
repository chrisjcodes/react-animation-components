import React from 'react';
import { node, string } from 'prop-types';
import { Transition } from 'react-transition-group';
import {
    defaultAnimationProps,
    getInlineStyles,
    getTimeoutValue,
} from 'utilities';

const statusStyles = {
    entered: {
        opacity: 1,
    },
    entering: {
        opacity: 1,
    },
    exited: {
        opacity: 0,
    },
    exiting: {
        opacity: 0,
    },
};

const FadeTransform = ({
    children,
    enter,
    exit,
    exiting,
    entering,
    ...props
}) => {
    const pos = {
        entering: entering || enter,
        entered: enter,
        exiting: exiting || exit,
        exited: exit,
    };

    return (
        <Transition timeout={getTimeoutValue(props)} {...props}>
            {status => (
                <div
                    style={{
                        ...getInlineStyles(props),
                        ...statusStyles[status],
                        transform: pos[status],
                        transitionProperty: 'transform, opacity',
                    }}
                >
                    {children}
                </div>
            )}
        </Transition>
    );
};

FadeTransform.propTypes = {
    appear: bool,
    children: node.isRequired,
    delay: number,
    duration: number,
    exit: string,
    enter: string,
    timingFn: string,
};

FadeTransform.defaultProps = {
    ...defaultAnimationProps,
};

export default FadeTransform;
