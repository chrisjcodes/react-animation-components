export const getInlineStyles = (
    { style = {}, delay, duration, timingFn, ...props } = {}
) => ({
    ...style,
    transitionDelay: delay ? `${delay}ms` : null,
    transitionDuration: duration ? `${duration}ms` : null,
    transitionTimingFunction: timingFn || null,
});

export const getTimeoutValue = ({ delay = 0, duration = 0 } = {}) =>
    delay + duration;

export const defaultAnimationProps = {
    appear: true,
    delay: 0,
    duration: 500,
    timingFn: 'ease',
};
