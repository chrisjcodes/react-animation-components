import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import {
    FadeInOut,
    FadeTransform,
    Loop,
    Random,
    Stagger,
    TweenTransform,
} from '../src/index';

storiesOf('Animations/FadeInOut', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeInOut
            in={boolean('in', true)}
            delay={number('delay', 0)}
            duration={number('duration', 500)}
            timingFn={text('timingFn', 'ease')}
            unmountOnExit={boolean('unmountOnExit', false)}
            mountOnEnter={boolean('mountOnEnter', false)}
        >
            <h1>Example</h1>
        </FadeInOut>
    ));

storiesOf('Animations/TweenTransform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <TweenTransform
            in={boolean('in', true)}
            delay={number('delay', 0)}
            duration={number('duration', 500)}
            timingFn={text('timingFn', 'ease')}
            enter={text('enter', 'translateY(50vh)')}
            exit={text('exit', 'none')}
        >
            <h1>Example</h1>
        </TweenTransform>
    ));

storiesOf('Animations/FadeTransform', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <FadeTransform
            in={boolean('in', true)}
            delay={number('delay', 0)}
            duration={number('duration', 500)}
            timingFn={text('timingFn', 'ease')}
            enter={text('enter', 'none')}
            exit={text('exit', 'translateY(50vh)')}
            unmountOnExit={boolean('unmountOnExit', false)}
            mountOnEnter={boolean('mountOnEnter', false)}
        >
            <h1>Example</h1>
        </FadeTransform>
    ));

storiesOf('Wrappers/Stagger', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Stagger>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
        </Stagger>
    ))
    .add('chunks of 2', () => (
        <Stagger chunk={2}>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
        </Stagger>
    ));

storiesOf('Wrappers/Random', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <Random>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
            <FadeInOut>
                <h1>Example</h1>
            </FadeInOut>
        </Random>
    ));

storiesOf('Wrappers/Loop', module)
    .addDecorator(withKnobs)
    .add('Bounce', () => (
        <Loop
            in={boolean('in', false)}
            interval={number('interval', 500)}
            onIterate={count => {
                console.log(count);
            }}
            iterations={5}
        >
            <TweenTransform enter="translateY(10vh)">
                <h1>Example</h1>
            </TweenTransform>
        </Loop>
    ))
    .add('Pulse', () => (
        <Loop in={boolean('in', false)} interval={number('interval', 500)}>
            <TweenTransform
                enter="scale(1.2)"
                style={{ display: 'inline-block' }}
            >
                <h1>Example</h1>
            </TweenTransform>
        </Loop>
    ))
    .add('Turn', () => (
        <Loop in={boolean('in', false)} interval={number('interval', 500)}>
            <TweenTransform
                enter="rotate(90deg)"
                style={{ display: 'inline-block' }}
            >
                <h1>Example</h1>
            </TweenTransform>
        </Loop>
    ))
    .add('Blink', () => (
        <Loop in={boolean('in', false)} interval={number('interval', 500)}>
            <FadeInOut>
                <h1>DONT DO THIS</h1>
            </FadeInOut>
        </Loop>
    ));
