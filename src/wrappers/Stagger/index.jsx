import React, { Component } from 'react';
import { func, node, number } from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import _after from 'lodash/after';
import _omit from 'lodash/omit';

import { defaultAnimationProps } from 'utilities';

export const getStaggerDelay = (idx, chunk, delay) => {
    if (chunk) {
        return (idx % chunk) * delay;
    }
    return idx * delay;
};

export const getMaxDelay = (count, chunk, delay, duration) => {
    if (chunk) {
        return (chunk - 1) * delay + duration;
    }
    return (count - 1) * delay + duration;
};

class Stagger extends Component {
    componentWillUnmount() {
        clearTimeout(this.onCompleteTimeout);
    }

    onCompleteTimeout = null;
    totalChildren = React.Children.count(this.props.children);

    onComplete = () => {
        const { chunk, delay, duration } = this.props;
        const waitTime = getMaxDelay(
            this.totalChildren,
            chunk,
            delay,
            duration
        );
        this.onCompleteTimeout = setTimeout(this.props.onComplete, waitTime);
    };

    onEntered = _after(this.totalChildren, this.onComplete);

    getTransitionGroupProps() {
        return _omit(this.props, [
            'delay',
            'duration',
            'chunk',
            'in',
            'onComplete',
        ]);
    }

    render() {
        const { children, chunk, delay, duration, in: inProp } = this.props;

        return (
            <TransitionGroup {...this.getTransitionGroupProps()}>
                {inProp &&
                    React.Children.map(children, (child, i) =>
                        React.cloneElement(child, {
                            delay: getStaggerDelay(i, chunk, delay),
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
    in: bool,
    onComplete: func,
};

Stagger.defaultProps = {
    chunk: 0,
    delay: 100,
    duration: defaultAnimationProps.duration,
    in: false,
    onComplete: Function.prototype,
};

export default Stagger;
