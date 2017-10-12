import React from 'react';
import FadeTranform from './index.jsx';
import renderer from 'react-test-renderer';

describe('FadeTranform', () => {
    test('renders', () => {
        const component = renderer.create(<FadeTranform />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('can accept custom styles', () => {
        const component = renderer.create(
            <FadeTranform style={{ background: 'black' }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDelay with delay prop', () => {
        const component = renderer.create(<FadeTranform delay="1s" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDuration with duration prop', () => {
        const component = renderer.create(<FadeTranform duration="1s" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionTimingFunction with timingFn prop', () => {
        const component = renderer.create(
            <FadeTranform timingFn="ease-in-out" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets start', () => {
        const component = renderer.create(
            <FadeTranform start="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets finish', () => {
        const component = renderer.create(
            <FadeTranform finish="translateX(10em)" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
