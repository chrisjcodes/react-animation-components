import { configure, addDecorator } from '@storybook/react';
import AppDecorator from './AppDecorator';

function loadStories() {
    require('../stories');
}

addDecorator(AppDecorator);

configure(loadStories, module);
