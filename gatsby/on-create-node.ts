import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode, Node } from 'gatsby';
import { Post } from '../src/types';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const nodeCopy = (node as unknown) as Post;

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof nodeCopy.frontmatter.slug !== 'undefined') {
      const parentNode = getNode(node.parent) as Node;
      const dirname = parentNode.relativeDirectory as string;
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
  }
};
