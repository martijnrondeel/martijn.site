import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';
import { siteConfig } from '../../config';

export const createPostsPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<any>(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        totalCount
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

  const { allMarkdownRemark } = result.data as {
    allMarkdownRemark: { totalCount: number };
  };
  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/blog' : `/blog/page/${i}`,
      component: resolve('./src/templates/posts-list-template.tsx'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/blog' : `/blog/page/${i - 1}`,
        nextPagePath: `/blog/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
      },
    });
  }
};
