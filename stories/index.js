import React from 'react';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    text,
    boolean,
    number,
    object,
} from '@storybook/addon-knobs';

import {
    Fade,
    FadeTransform,
    Loop,
    Random,
    Stagger,
    Transform,
} from '../src/index';

const exampleArray = ['Example', 'Example', 'Example', 'Example', 'Example'];

storiesOf('Animations/Fade', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Fade
            in={boolean('in', true)}
            delay={number('delay', 0)}
            duration={number('duration', 500)}
            timingFn={text('timingFn', 'ease')}
            unmountOnExit={boolean('unmountOnExit', false)}
            mountOnEnter={boolean('mountOnEnter', false)}
            enterOpacity={number('enterOpacity', 1)}
            exitOpacity={number('exitOpacity', 0)}
        >
            <h1>Example</h1>
        </Fade>
    ));

storiesOf('Animations/Transform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Transform
            in={boolean('in', true)}
            delay={number('delay', 0)}
            duration={number('duration', 500)}
            timingFn={text('timingFn', 'ease')}
            enterTransform={text('enterTransform', 'translateY(50vh)')}
            exitTransform={text('exitTransform', 'none')}
        >
            <h1>Example</h1>
        </Transform>
    ));

storiesOf('Animations/FadeTransform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeTransform
            in={boolean('in', true)}
            delay={number('delay', 0)}
            duration={number('duration', 500)}
            timingFn={text('timingFn', 'ease')}
            unmountOnExit={boolean('unmountOnExit', false)}
            mountOnEnter={boolean('mountOnEnter', false)}
            fadeProps={object('fadeProps', {
                enterOpacity: 1,
                exitOpacity: 0,
            })}
            transformProps={object('transformProps', {
                enterTransform: 'none',
                exitTransform: 'translateY(50vh)',
            })}
        >
            <h1>Example</h1>
        </FadeTransform>
    ));

storiesOf('Wrappers/Stagger', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Stagger in={boolean('in', true)} chunk={number('chunk', 0)}>
            {exampleArray.map((example, i) => (
                <Fade key={`${i}-example`}>
                    <h1>{example}</h1>
                </Fade>
            ))}
        </Stagger>
    ));

storiesOf('Wrappers/Random', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Random
            in={boolean('in', true)}
            minDelay={number('minDelay', 0)}
            maxDelay={number('maxDelay', 1500)}
        >
            {exampleArray.map((example, i) => (
                <Fade key={`${i}-example`}>
                    <h1>{example}</h1>
                </Fade>
            ))}
        </Random>
    ));

storiesOf('Wrappers/Loop', module)
    .add('Bounce', () => (
        <Loop in>
            <Transform enterTransform="translateY(10vh)" timeout={200}>
                <h1>Example</h1>
            </Transform>
        </Loop>
    ))
    .add('Pulse', () => (
        <Loop in>
            <Transform
                enterTransform="scale(1.2)"
                style={{ display: 'inline-block' }}
                timeout={100}
            >
                <h1>Example</h1>
            </Transform>
        </Loop>
    ))
    .add('Rotate', () => (
        <Loop in>
            <Transform
                enterTransform="rotate(360deg)"
                style={{ display: 'inline-block' }}
            >
                <h1>Example</h1>
            </Transform>
        </Loop>
    ))
    .add('Blink', () => (
        <Loop in>
            <Fade>
                <h1>Example</h1>
            </Fade>
        </Loop>
    ));
