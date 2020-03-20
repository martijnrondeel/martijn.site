import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';
import { siteConfig } from '../../config';

export const createProjectsPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<any>(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
      ) {
        totalCount
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch projects on build');
  }

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/projects' : `/projects/page/${i}`,
      component: resolve('./src/templates/projects-list-template.tsx'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/projects' : `/projects/page/${i - 1}`,
        nextPagePath: `/projects/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
      },
    });
  }
};
