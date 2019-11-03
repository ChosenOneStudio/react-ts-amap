import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hello } from '@components/Hello';
const stories = storiesOf('Components', module);
stories.add('Page Tab', () => (
  <div style={{ display: 'flex' }}>
    <Hello />
  </div>
));
