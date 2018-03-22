import React from 'react';
import Fade from './index.jsx';
import renderer from 'react-test-renderer';

describe('Fade', () => {
    test('renders', () => {
        const component = renderer.create(<Fade />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('can accept custom styles', () => {
        const component = renderer.create(
            <Fade style={{ background: 'black' }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDelay with delay prop', () => {
        const component = renderer.create(<Fade delay={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionDuration with duration prop', () => {
        const component = renderer.create(<Fade duration={1000} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('sets transitionTimingFunction with timingFn prop', () => {
        const component = renderer.create(<Fade timingFn="ease-in-out" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
