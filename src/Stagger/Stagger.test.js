import React from 'react';
import Stagger, { getStaggerDelay } from './index.jsx';
import renderer from 'react-test-renderer';

describe('Stagger', () => {
    test('getStaggerDelay returns correct delay', () => {
        const props = {
            delay: 100,
        };
        const idx = 10;
        const expected = props.delay * idx;
        const actual = getStaggerDelay(idx, props);

        expect(actual).toBe(expected);
    });

    test('getStaggerDelay returns chunked delays', () => {
        const props = {
            delay: 100,
            chunk: 5,
        };
        const idx = 5;
        const expected = 0;
        const actual = getStaggerDelay(idx, props);

        expect(actual).toBe(expected);
    });
});
