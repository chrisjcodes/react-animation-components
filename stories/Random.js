import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { Fade, Random } from '../src/index';

const exampleArray = ['Example', 'Example', 'Example', 'Example', 'Example'];

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
