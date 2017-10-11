import React from 'react';
import { node, string } from 'prop-types';
import { defaultAnimationProps, getInlineStyles } from '../utilities.js';

import FadeInOut from '../FadeInOut';
import TweenTransform from '../TweenTransform';

const FadeTransform = ({ children, ...props }) => {
    return (
        <FadeInOut {...props} style={getInlineStyles(props)}>
            <TweenTransform {...props} style={getInlineStyles(props)}>
                {children}
            </TweenTransform>
        </FadeInOut>
    );
};

FadeTransform.propTypes = {
    children: node.isRequired,
    finish: string,
    start: string,
};

FadeTransform.defaultProps = {
    ...defaultAnimationProps,
};

export default FadeTransform;
