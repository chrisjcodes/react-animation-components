import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { Fade, Stagger } from '../src/index';

const exampleArray = ['Example', 'Example', 'Example', 'Example', 'Example'];

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
