import { getInlineStyles, getTimeoutValue } from './utilities.js';

describe('Utilities', () => {
    describe('getInlineStyles', () => {
        test('returns an object', () => {
            const actual = getInlineStyles();

            const expected = expect.objectContaining({
                transitionDelay: null,
                transitionDuration: null,
                transitionTimingFunction: null,
            });

            expect(actual).toEqual(expected);
        });

        test('sets transition properties with props object', () => {
            const props = {
                delay: 1000,
                duration: 1000,
                timingFn: 'ease-in-out',
            };

            const actual = getInlineStyles(props);

            const expected = expect.objectContaining({
                transitionDelay: '1000ms',
                transitionDuration: '1000ms',
                transitionTimingFunction: 'ease-in-out',
            });

            expect(actual).toEqual(expected);
        });

        test('does not overwrite transition styles', () => {
            const props = {
                delay: 1000,
                duration: 1000,
                timingFn: 'ease-in-out',
                style: {
                    transitionDelay: '2s',
                    transitionDuration: '2s',
                    transitionTimingFunction: 'linear',
                },
            };

            const actual = getInlineStyles(props);

            const expected = expect.objectContaining({
                transitionDelay: '1000ms',
                transitionDuration: '1000ms',
                transitionTimingFunction: 'ease-in-out',
            });

            expect(actual).toEqual(expected);
        });
    });

    describe('getTimeoutValue', () => {
        test('Returns value when delay and/or duration are undefined', () => {
            const props = {
                delay: undefined,
                duration: undefined,
            };

            const actual = getTimeoutValue(props);
            const expected = 0;
            expect(actual).toEqual(expected);
        });
    });
});
