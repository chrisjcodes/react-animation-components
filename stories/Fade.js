import React from 'react';

import { storiesOf } from '@storybook/react';
import * as knobs from '@storybook/addon-knobs';

import { createCommonKnobs } from '../src/utilities';

import { Fade } from '../src/index';

storiesOf('Animations/Fade', module)
    .addDecorator(knobs.withKnobs)
    .add('default', () => {
        const commonKnobs = createCommonKnobs(knobs);

        const unmountOnExit = knobs.boolean('unmountOnExit', false);
        const mountOnEnter = knobs.boolean('mountOnEnter', false);

        const enterOpacity = knobs.number('enterOpacity', 1);
        const exitOpacity = knobs.number('exitOpacity', 0);

        return (
            <Fade
                in={commonKnobs.inProp}
                delay={commonKnobs.delay}
                duration={commonKnobs.duration}
                timingFn={commonKnobs.timingFn}
                unmountOnExit={unmountOnExit}
                mountOnEnter={mountOnEnter}
                enterOpacity={enterOpacity}
                exitOpacity={exitOpacity}
            >
                <h1>Example</h1>
            </Fade>
        );
    });
