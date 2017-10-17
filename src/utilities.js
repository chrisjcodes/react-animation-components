export const getInlineStyles = (
    { style = {}, delay, duration, timingFn, ...props } = {}
) => ({
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
