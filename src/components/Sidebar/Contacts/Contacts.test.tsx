import React from 'react';
import renderer from 'react-test-renderer';
import { Contacts } from '.';

describe('contacts', () => {
  const props = {
    contacts: {
      email: '#',
      twitter: '#',
      vkontakte: '#',
      github: '#',
      rss: '#',
      telegram: '#',
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
