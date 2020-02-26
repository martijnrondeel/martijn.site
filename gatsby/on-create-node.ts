import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';
import { kebabCase } from '../src/utils/kebabcase';
import { Node } from '../src/types';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const nodeCopy = node as Node;

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof nodeCopy.frontmatter.slug !== 'undefined') {
      const dirname = getNode(node.parent).relativeDirectory;
      createNodeField({
        node,
        name: 'slug',
        value: `/${dirname}/${nodeCopy.frontmatter.slug}`,
      });
    } else {
      const value = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'slug',
        value,
      });
    }

    if (nodeCopy.frontmatter.tags) {
      const tagSlugs = nodeCopy.frontmatter.tags.map(tag => `/tag/${kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (nodeCopy.frontmatter.category) {
      const categorySlug = `/category/${kebabCase(nodeCopy.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};
