export const getInlineStyles = ({ style = {}, ...props } = {}) => ({
    ...style,
    transitionDelay: props.delay || null,
    transitionDuration: props.duration || null,
    transitionTimingFunction: props.timingFn || null,
});

export const defaultAnimationProps = {
    appear: true,
    duration: '500ms',
    timeout: 0,
    timingFn: 'linear',
};
