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
        opacity: 1,
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
                    style={{
                        ...getInlineStyles(props),
                        ...statusStyles[status],
                        transitionProperty: 'opacity',
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
    delay: number,
    duration: number,
    timingFn: string,
};

FadeInOut.defaultProps = {
    ...defaultAnimationProps,
};

export default FadeInOut;
