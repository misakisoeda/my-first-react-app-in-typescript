import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// type Foo = JSX.IntrinsicAttributes;
// ↑IntrinsicAttributesを調べてみる

ReactDOM.render(<App message="Hello, React!"/>, document.getElementById('root'));
