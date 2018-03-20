import React from 'react';
import { bool, node, number, string } from 'prop-types';
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
        opacity: 0,
    },
    exited: {
        opacity: 0,
    },
    exiting: {
        opacity: 0,
    },
};

const FadeInOut = props => {
    return (
        <Transition timeout={getTimeoutValue(props)} {...props}>
            {status => (
                <div
                    className={props.className}
                    style={{
                        ...getInlineStyles(props),
                        ...statusStyles[status],
                        transitionProperty: 'opacity',
                        willChange: 'opacity',
                    }}
                >
                    {props.children}
                </div>
            )}
        </Transition>
    );
};

FadeInOut.propTypes = {
    appear: bool,
    children: node.isRequired,
    className: string,
    delay: number,
    duration: number,
    timingFn: string,
};

FadeInOut.defaultProps = {
    ...defaultAnimationProps,
};

export default FadeInOut;
