import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';
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

  // Home page
  createPage({
    path: '/',
    component: resolve('./src/templates/index-template.tsx'),
    context: {},
  });

  // Projects page
  createPage({
    path: '/projects',
    component: resolve('./src/templates/projects-list-template.tsx'),
    context: {},
  });

  // Get posts and projects from markdown
  const result = await graphql<AllMarkdownRemark>(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true }, project: { eq: null } } }
      ) {
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

  // Creates the individual page, post and project pages
  edges.forEach((edge) => {
    switch (edge.node.frontmatter.template) {
      case 'post':
        createPage({
          path: edge.node.fields.slug,
          component: resolve('./src/templates/post-template.tsx'),
          context: { slug: edge.node.fields.slug },
        });
        break;
      case 'project':
        createPage({
          path: edge.node.fields.slug,
          component: resolve('./src/templates/project-template.tsx'),
          context: { slug: edge.node.fields.slug },
        });
        break;
    }
  });

  // Creates feeds for the above pages
  // @ts-ignore
  createPostsPages({ graphql, actions });
};
