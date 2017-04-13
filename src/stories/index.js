import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from '../index';

storiesOf('Login', module)
  .add('default view', () => (
    <App />
  ));
