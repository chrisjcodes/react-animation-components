import React from 'react';
import FadeInOut from './index.jsx';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

describe('FadeInOut', () => {
    test('renders', () => {
        const component = renderer.create(<FadeInOut />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('can accept custom styles', () => {
        const component = renderer.create(
            <FadeInOut style={{ background: 'black' }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDelay with delay prop', () => {
        const component = renderer.create(<FadeInOut delay="1s" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDuration with duration prop', () => {
        const component = renderer.create(<FadeInOut duration="1s" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionTimingFunction with timingFn prop', () => {
        const component = renderer.create(<FadeInOut timingFn="ease-in-out" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
