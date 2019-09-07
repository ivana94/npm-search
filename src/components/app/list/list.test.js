import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import List from './list';
import ListItem from './listItem';


it('List does not throw error when passed no array as code prop', () => {
  const wrapper = shallow(<List/>);
  expect(wrapper.contains(<div className="list-container" />)).toEqual(true);
});

it('List does not throw error when passed an empty array as code prop', () => {
  const wrapper = shallow(<List code={[]}/>);
  expect(wrapper.contains(<div className="list-container" />)).toEqual(true);
});
