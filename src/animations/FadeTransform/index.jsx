import React from 'react';
import { node, string } from 'prop-types';
import {
    defaultAnimationProps,
    getInlineStyles,
    getTimeoutValue,
} from 'utilities';

import FadeInOut from '../FadeInOut';
import TweenTransform from '../TweenTransform';

const FadeTransform = ({ children, ...props }) => {
    return (
        <TweenTransform
            timeout={getTimeoutValue(props)}
            {...props}
            style={getInlineStyles(props)}
        >
            <FadeInOut
                timeout={getTimeoutValue(props)}
                {...props}
                style={getInlineStyles(props)}
            >
                {children}
            </FadeInOut>
        </TweenTransform>
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
