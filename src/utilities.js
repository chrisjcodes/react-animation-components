export const getInlineStyles = ({
    style = {},
    delay,
    duration,
    timingFn,
} = {}) => ({
    ...style,
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFn,
});

export const getTimeoutValue = ({ delay = 0, duration = 0 } = {}) =>
    delay + duration;

export const defaultAnimationProps = {
    appear: true,
    delay: 0,
    duration: 500,
    timingFn: 'ease',
};

export const createCommonKnobs = knobs => {
    return {
        inProp: knobs.boolean('in', true),
        delay: knobs.number('delay', defaultAnimationProps.delay),
        duration: knobs.number('duration', defaultAnimationProps.duration),
        timingFn: knobs.text('timingFn', defaultAnimationProps.timingFn),
    };
};
