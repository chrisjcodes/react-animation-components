import React from 'react';

import { storiesOf } from '@storybook/react';
import * as knobs from '@storybook/addon-knobs';

import { createCommonKnobs } from '../src/utilities';

import { Transform } from '../src/index';

storiesOf('Animations/Transform', module)
    .addDecorator(knobs.withKnobs)
    .add('default', () => {
        const commonKnobs = createCommonKnobs(knobs);
        const enterTransform = knobs.text('enterTransform', 'translateY(50vh)');
        const exitTransform = knobs.text('exitTransform', 'none');

        return (
            <Transform
                in={commonKnobs.inProp}
                delay={commonKnobs.delay}
                duration={commonKnobs.duration}
                timingFn={commonKnobs.timingFn}
                enterTransform={enterTransform}
                exitTransform={exitTransform}
            >
                <h1>Example</h1>
            </Transform>
        );
    });
