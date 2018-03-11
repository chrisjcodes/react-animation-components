import React, { Component } from 'react';
import { func, node, number } from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import _after from 'lodash/after';
import _omit from 'lodash/omit';

import { defaultAnimationProps } from 'utilities';

export const getStaggerDelay = (idx, props) => {
    if (props.chunk) {
        return (idx % props.chunk) * props.delay;
    }
    return idx * props.delay;
};

export const getMaxDelay = (count, props) => {
    if (props.chunk) {
        return (props.chunk - 1) * props.delay + props.duration;
    }
    return (count - 1) * props.delay + props.duration;
};

class Stagger extends Component {
    componentWillUnmount() {
        clearTimeout(this.onCompleteTimeout);
    }

    onCompleteTimeout = null;
    totalChildren = React.Children.count(this.props.children);

    onComplete = () => {
        const waitTime = getMaxDelay(this.totalChildren, this.props);
        this.onCompleteTimeout = setTimeout(this.props.onComplete, waitTime);
    };

    onEntered = _after(this.totalChildren, this.onComplete);

    getTransitionGroupProps() {
        return _omit(this.props, ['delay', 'duration', 'chunk', 'onComplete']);
    }

    render() {
        const { children, duration, ...props } = this.props;
        return (
            <TransitionGroup appear {...this.getTransitionGroupProps()}>
                {React.Children.map(children, (child, i) =>
                    React.cloneElement(child, {
                        delay: getStaggerDelay(i, props),
                        duration,
                        onEntered: this.onEntered,
                    })
                )}
            </TransitionGroup>
        );
    }
}

Stagger.propTypes = {
    children: node,
    chunk: number,
    delay: number,
    duration: number,
    onComplete: func,
};

Stagger.defaultProps = {
    chunk: 0,
    delay: 100,
    duration: defaultAnimationProps.duration,
    onComplete: Function.prototype,
};

export default Stagger;
