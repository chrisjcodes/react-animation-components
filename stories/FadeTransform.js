import React from 'react';

import { storiesOf } from '@storybook/react';
import * as knobs from '@storybook/addon-knobs';

import { createCommonKnobs } from '../src/utilities';

import { FadeTransform } from '../src/index';

storiesOf('Animations/FadeTransform', module)
    .addDecorator(knobs.withKnobs)
    .add('default', () => {
        const commonKnobs = createCommonKnobs(knobs);

        const unmountOnExit = knobs.boolean('unmountOnExit', false);
        const mountOnEnter = knobs.boolean('mountOnEnter', false);

        const fadeProps = knobs.object('fadeProps', {
            enterOpacity: 1,
            exitOpacity: 0,
        });

        const transformProps = knobs.object('transformProps', {
            enterTransform: 'none',
            exitTransform: 'translateY(50vh)',
        });

        return (
            <FadeTransform
                in={commonKnobs.inProp}
                delay={commonKnobs.delay}
                duration={commonKnobs.duration}
                timingFn={commonKnobs.timingFn}
                unmountOnExit={unmountOnExit}
                mountOnEnter={mountOnEnter}
                fadeProps={fadeProps}
                transformProps={transformProps}
            >
                <h1>Example</h1>
            </FadeTransform>
        );
    });
