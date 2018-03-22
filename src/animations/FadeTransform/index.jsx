import React from 'react';
import { bool, node, object } from 'prop-types';
import FadeInOut from '../FadeInOut';
import TweenTransform from '../TweenTransform';

import { defaultAnimationProps } from 'utilities';

const FadeTransform = ({ children, fadeProps, transformProps, ...props }) => {
    return (
        <FadeInOut {...props} {...fadeProps}>
            <TweenTransform {...props} {...transformProps}>
                {children}
            </TweenTransform>
        </FadeInOut>
    );
};

FadeTransform.propTypes = {
    children: node.isRequired,
    fadeProps: object,
    in: bool,
    transformProps: object,
};

FadeTransform.defaultProps = {
    ...defaultAnimationProps,
    fadeProps: {},
    transformProps: {},
};

export default FadeTransform;
