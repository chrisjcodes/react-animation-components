import React from 'react';
import { bool, node, number, string } from 'prop-types';
import { Transition } from 'react-transition-group';

import {
    defaultAnimationProps,
    getInlineStyles,
    getTimeoutValue,
} from 'utilities';

const Fade = props => {
    const statusStyles = {
        entered: {
            opacity: props.enterOpacity,
        },
        entering: {
            opacity: props.exitOpacity,
        },
        exited: {
            opacity: props.exitOpacity,
        },
        exiting: {
            opacity: props.exitOpacity,
        },
    };

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

Fade.propTypes = {
    appear: bool,
    children: node.isRequired,
    className: string,
    delay: number,
    duration: number,
    enterOpacity: number,
    exitOpacity: number,
    timingFn: string,
};

Fade.defaultProps = {
    ...defaultAnimationProps,
    enterOpacity: 1,
    exitOpacity: 0,
};

export default Fade;
