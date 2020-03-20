import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import ProjectTemplate from './project-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import markdownRemark from '../../jest/__fixtures__/markdown-remark';
import { RenderCallback } from '../types';

describe('ProjectTemplate', () => {
  const props = {
    data: {
      ...markdownRemark,
    },
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ProjectTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
