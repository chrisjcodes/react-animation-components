import React from 'react';
import { bool, node, object } from 'prop-types';
import Fade from '../Fade';
import Transform from '../Transform';

import { defaultAnimationProps } from 'utilities';

const FadeTransform = ({ children, fadeProps, transformProps, ...props }) => {
    return (
        <Fade {...props} {...fadeProps}>
            <Transform {...props} {...transformProps}>
                {children}
            </Transform>
        </Fade>
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
