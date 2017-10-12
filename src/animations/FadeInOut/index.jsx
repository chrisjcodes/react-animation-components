import React from 'react';
import { bool, node, number, string } from 'prop-types';
import { Transition } from 'react-transition-group';

import { defaultAnimationProps, getInlineStyles } from 'utilities';

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
        opacity: 1,
    },
};

const FadeInOut = props => {
    return (
        <Transition {...props}>
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
    delay: string,
    duration: string,
    timeout: number,
    timingFn: string,
};

FadeInOut.defaultProps = {
    ...defaultAnimationProps,
};

export default FadeInOut;
