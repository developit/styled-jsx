import React from 'react';
import JSXStyle from './style';

export default () => (
  React.createElement('div', null,
    React.createElement(JSXStyle, { jsx: true }, `
      h1[jsx-1234] {
        color: red;
      }
    `),
    React.createElement('h1', null, 'I am red.')
  )
);

