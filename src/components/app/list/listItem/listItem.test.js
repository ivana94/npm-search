import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ListItem from './listItem';


it('ListItem renders correctly when passed file prop', () => {
  const wrapper = shallow(<ListItem file={{url:'http://google.com', repoOwner:'owner', repoName:'name', profilePic: 'www.flickr.com'}}/>);
  expect(wrapper.find('strong')).toHaveLength(3);
});
