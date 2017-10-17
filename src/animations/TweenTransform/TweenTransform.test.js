import React from 'react';
import TweenTransform from './index.jsx';
import renderer from 'react-test-renderer';

describe('TweenTransform', () => {
    test('renders', () => {
        const component = renderer.create(<TweenTransform />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('can accept custom styles', () => {
        const component = renderer.create(
            <TweenTransform style={{ background: 'black' }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDelay with delay prop', () => {
        const component = renderer.create(<TweenTransform delay={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDuration with duration prop', () => {
        const component = renderer.create(<TweenTransform duration={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionTimingFunction with timingFn prop', () => {
        const component = renderer.create(
            <TweenTransform timingFn="ease-in-out" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets start', () => {
        const component = renderer.create(
            <TweenTransform start="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets finish', () => {
        const component = renderer.create(
            <TweenTransform finish="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
