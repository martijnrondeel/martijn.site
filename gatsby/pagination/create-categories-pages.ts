import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';
import { kebabCase } from '../../src/utils/kebabcase';
import { siteConfig } from '../../config';
import { AllMarkdownRemark } from '../../src/types';

export const createCategoriesPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const result = await graphql<{ allMarkdownRemark: AllMarkdownRemark }>(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch posts on build');
  }

  result.data.allMarkdownRemark.group.forEach(category => {
    const numPages = Math.ceil(category.totalCount / postsPerPage);
    const categorySlug = `/category/${kebabCase(category.fieldValue)}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? categorySlug : `${categorySlug}/page/${i}`,
        component: resolve('./src/templates/category-template.tsx'),
        context: {
          category: category.fieldValue,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? categorySlug : `${categorySlug}/page/${i - 1}`,
          nextPagePath: `${categorySlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
        },
      });
    }
  });
};
