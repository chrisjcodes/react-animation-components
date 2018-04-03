import { getRandomDelay } from './index.jsx';

describe('Random', () => {
    test('getRandomDelay returns no more than maxDelay and no less than 0', () => {
        const props = {
            minDelay: 0,
            maxDelay: 5000,
        };
        const numberOfRuns = 1000;

        let actual = true;

        for (let i = 0; i < numberOfRuns; i++) {
            const delay = getRandomDelay(props.minDelay, props.maxDelay);
            actual = delay <= props.maxDelay && delay >= props.minDelay;
        }

        expect(actual).toBe(true);
    });
});
