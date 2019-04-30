import React from 'react';
import { render } from 'react-dom';

const style = {
  textAlign: 'center'
};

const App = () => (
  <div style={style}>
    <h2>React Boilerplate</h2>
    <h4>Here's a surfing dog!</h4>
    <img src="/dist/images/surfingdog.jpg" alt="Surfing Dog" />
  </div>
);

render(<App />, document.getElementById('app'));