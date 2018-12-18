import Counter from './Counter';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('unit tests Counter', () => {

  test('mount', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Counter />, div);
    // ReactDOM.unmountComponentAtNode(div);
    shallow(<Counter />);
  });

  test('count fills button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter count={10} />, div);
    expect(div.querySelector('button').innerHTML).toBe('10');
    ReactDOM.unmountComponentAtNode(div);
  });

  test('count fills button', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Counter count={10} handleClick={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

});