import React, { Component } from 'react';
import { func, node, number } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import _after from 'lodash/after';
import _omit from 'lodash/omit';

import { defaultAnimationProps } from 'utilities';

export const getRandomDelay = (minDelay, maxDelay) => {
    const delay = Math.round(Math.random() * maxDelay);
    return delay >= minDelay ? delay : minDelay;
};

class Random extends Component {
    delays = React.Children.map(this.props.children, c =>
        getRandomDelay(this.props.minDelay, this.props.maxDelay)
    );

    onCompleteTimeout = null;
    totalChildren = React.Children.count(this.props.children);

    componentWillUnmount() {
        clearTimeout(this.onCompleteTimeout);
    }

    onComplete = _after(this.totalChildren, () => {
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
            'maxDelay',
            'minDelay',
            'onComplete',
        ]);
    }

    render() {
        const { children, duration, ...props } = this.props;

        return (
            <TransitionGroup appear {...this.getTransitionProps()}>
                {React.Children.map(children, (child, i) =>
                    React.cloneElement(child, {
                        delay: this.delays[i],
                        duration: duration,
                        onEntered: this.onComplete,
                    })
                )}
            </TransitionGroup>
        );
    }
}
Random.propTypes = {
    children: node.isRequired,
    duration: number,
    maxDelay: number,
    minDelay: number,
    onComplete: func,
};

Random.defaultProps = {
    duration: defaultAnimationProps.duration,
    onComplete: Function.prototype,
    maxDelay: 1500,
    minDelay: 0,
};

export default Random;
