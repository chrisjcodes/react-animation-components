import { getInlineStyles } from './utilities.js';

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
                delay: '1s',
                duration: '1s',
                timingFn: 'ease-in-out',
            };

            const actual = getInlineStyles(props);

            const expected = expect.objectContaining({
                transitionDelay: '1s',
                transitionDuration: '1s',
                transitionTimingFunction: 'ease-in-out',
            });

            expect(actual).toEqual(expected);
        });

        test('does not overwrite transition styles', () => {
            const props = {
                delay: '1s',
                duration: '1s',
                timingFn: 'ease-in-out',
                style: {
                    transitionDelay: '2s',
                    transitionDuration: '2s',
                    transitionTimingFunction: 'linear',
                },
            };

            const actual = getInlineStyles(props);

            const expected = expect.objectContaining({
                transitionDelay: '1s',
                transitionDuration: '1s',
                transitionTimingFunction: 'ease-in-out',
            });

            expect(actual).toEqual(expected);
        });
    });
});
