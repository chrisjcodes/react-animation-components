import React, { Component } from 'react';
import { bool, func, node, number } from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import _omit from 'lodash/omit';
import _reverse from 'lodash/reverse';

import { defaultAnimationProps, onceEvery } from 'utilities';

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

    delays = React.Children.map(this.props.children, (_, i) =>
        getStaggerDelay(
            i,
            this.props.chunk,
            this.props.delay,
            this.props.duration
        )
    );

    reversedDelays = _reverse([...this.delays]);

    onCompleteTimeout = null;
    totalChildren = React.Children.count(this.props.children);

    onComplete = onceEvery(this.totalChildren, () => {
        const { chunk, delay, duration } = this.props;
        const waitTime = getMaxDelay(
            this.totalChildren,
            chunk,
            delay,
            duration
        );
        this.onCompleteTimeout = setTimeout(this.props.onComplete, waitTime);
    });

    getTransitionGroupProps() {
        return _omit(this.props, [
            'delay',
            'duration',
            'chunk',
            'in',
            'onComplete',
            'reverse',
        ]);
    }

    render() {
        const { children, duration, in: inProp, reverse } = this.props;

        const delays = reverse ? this.reversedDelays : this.delays;

        return (
            <TransitionGroup {...this.getTransitionGroupProps()}>
                {inProp &&
                    React.Children.map(children, (child, i) =>
                        React.cloneElement(child, {
                            delay: delays[i],
                            duration,
                            onEntered: this.onComplete,
                            onExited: this.onComplete,
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
    reverse: bool,
};

Stagger.defaultProps = {
    chunk: 0,
    delay: 100,
    duration: defaultAnimationProps.duration,
    in: false,
    onComplete: Function.prototype,
    reverse: false,
};

export default Stagger;
