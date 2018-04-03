import React from 'react';
import Transform from './index.jsx';
import renderer from 'react-test-renderer';

describe('Transform', () => {
    test('renders', () => {
        const component = renderer.create(<Transform />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('can accept className', () => {
        const component = renderer.create(<Transform className="test" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('can accept custom styles', () => {
        const component = renderer.create(
            <Transform style={{ background: 'black' }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDelay with delay prop', () => {
        const component = renderer.create(<Transform delay={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDuration with duration prop', () => {
        const component = renderer.create(<Transform duration={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionTimingFunction with timingFn prop', () => {
        const component = renderer.create(<Transform timingFn="ease-in-out" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets enterTransform', () => {
        const component = renderer.create(
            <Transform enterTransform="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets exitTransform', () => {
        const component = renderer.create(
            <Transform exitTransform="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
