import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from '.';

describe('footer', () => {
  it('renders correctly', () => {
    const props = {
      copyright: 'copyright',
      repo: 'github',
    };

    const tree = renderer.create(<Footer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
