import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './header';


it('Header renders correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.contains(<h1>Welcome to NPM search!</h1>)).toEqual(true);
});
