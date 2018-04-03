import React from 'react';

import { storiesOf } from '@storybook/react';

import { Fade, Loop, Transform } from '../src/index';

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
