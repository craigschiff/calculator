import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Caclulator from './components/calculator'
import Display from './components/display'
import Inputs from './components/inputs'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('adds two numbers correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
