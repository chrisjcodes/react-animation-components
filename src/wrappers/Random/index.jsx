import React, { Component } from 'react';
import { bool, func, node, number } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import _omit from 'lodash/omit';
import _reverse from 'lodash/reverse';

import { defaultAnimationProps, onceEvery } from 'utilities';

export const getRandomDelay = (minDelay, maxDelay) => {
    const delay = Math.round(Math.random() * maxDelay);
    return delay >= minDelay ? delay : minDelay;
};

class Random extends Component {
    componentWillUnmount() {
        clearTimeout(this.onCompleteTimeout);
    }

    delays = React.Children.map(this.props.children, () =>
        getRandomDelay(this.props.minDelay, this.props.maxDelay)
    );

    reversedDelays = _reverse([...this.delays]);

    onCompleteTimeout = null;
    totalChildren = React.Children.count(this.props.children);

    onComplete = onceEvery(this.totalChildren, () => {
        const maxDelay = Math.max(...this.delays);

        this.onCompleteTimeout = setTimeout(
            this.props.onComplete,
            maxDelay + this.props.duration
        );
    });

    getTransitionProps() {
        return _omit(this.props, [
            'children',
            'duration',
            'in',
            'maxDelay',
            'minDelay',
            'onComplete',
            'reverse',
        ]);
    }

    render() {
        const { children, duration, in: inProp, reverse } = this.props;

        const delays = reverse ? this.reversedDelays : this.delays;

        return (
            <TransitionGroup {...this.getTransitionProps()}>
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
Random.propTypes = {
    children: node.isRequired,
    duration: number,
    in: bool,
    maxDelay: number,
    minDelay: number,
    onComplete: func,
    reverse: bool,
};

Random.defaultProps = {
    duration: defaultAnimationProps.duration,
    in: false,
    maxDelay: 1500,
    minDelay: 0,
    onComplete: Function.prototype,
    reverse: false,
};

export default Random;
