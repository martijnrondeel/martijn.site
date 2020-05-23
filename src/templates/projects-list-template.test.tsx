import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery, useStaticQuery } from 'gatsby';
import ProjectsListTemplate from './projects-list-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemarkWithRepositories from '../../jest/__fixtures__/all-markdown-remark-with-repositories';
import pageContext from '../../jest/__fixtures__/page-context';
import { RenderCallback } from '../types';

describe('projectsListTemplate', () => {
  const props = {
    data: {
      ...allMarkdownRemarkWithRepositories,
    },
    ...pageContext,
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata),
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ProjectsListTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
