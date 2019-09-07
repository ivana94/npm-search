import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './app';
import Adapter from 'enzyme-adapter-react-16';


it('App renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toEqual({});
});
