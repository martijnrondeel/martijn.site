import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Comments from '.';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import { RenderCallback } from '../../../types';

describe('Comments', () => {
  beforeEach(() => {
    console.log('hi');
    console.log(siteMetadata);
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  const props = {
    postTitle: 'test',
    postSlug: '/test',
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Comments {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
