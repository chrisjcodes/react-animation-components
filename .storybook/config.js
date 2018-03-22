import { configure, addDecorator } from '@storybook/react';
import AppDecorator from './AppDecorator';

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator(AppDecorator);

configure(loadStories, module);
