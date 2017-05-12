import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Caclulator from './components/calculator'
import Display from './components/display'
import Inputs from './components/inputs'
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag,
	Simulate
} from 'react-addons-test-utils'
import { expect } from 'chai'


describe('Calculator', () => {
	it('should render a display and 17 buttons', () => {
		const component = renderIntoDocument(
			<Caculator />
		);
		const inputs = findRenderedDOMComponentWithTag(component, 'Inputs');
		const display = findRenderedDOMComponentWithTag(component, 'Display');

		expect(inputField).to.be.ok;
		expect(button).to.be.ok;
	});


it('adds two numbers correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
