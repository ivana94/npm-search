import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Search from './search';


it('Search renders correctly', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper.find(".search-container").length).toBe(1);
});
