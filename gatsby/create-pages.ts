import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';
import { createTagsPages } from './pagination/create-tags-pages';
import { createCategoriesPages } from './pagination/create-categories-pages';
import { createPostsPages } from './pagination/create-posts-pages';
import { AllMarkdownRemark } from '../src/types';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: resolve('./src/templates/not-found-template.tsx'),
    context: {},
  });

  // Tags list
  createPage({
    path: '/tags',
    component: resolve('./src/templates/tags-list-template.tsx'),
    context: {},
  });

  // Categories list
  createPage({
    path: '/categories',
    component: resolve('./src/templates/categories-list-template.tsx'),
    context: {},
  });

  // Posts and pages from markdown
  const result = await graphql<AllMarkdownRemark>(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
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

  const { edges } = result.data.allMarkdownRemark;

  edges.forEach(edge => {
    if (edge.node.frontmatter.template === 'page') {
      createPage({
        path: edge.node.fields.slug,
        component: resolve('./src/templates/page-template.tsx'),
        context: { slug: edge.node.fields.slug },
      });
    } else if (edge.node.frontmatter.template === 'post') {
      createPage({
        path: edge.node.fields.slug,
        component: resolve('./src/templates/post-template.tsx'),
        context: { slug: edge.node.fields.slug },
      });
    }
  });

  // Feeds
  // @ts-ignore
  createTagsPages({ graphql, actions });
  // @ts-ignore
  createCategoriesPages({ graphql, actions });
  // @ts-ignore
  createPostsPages({ graphql, actions });
};
