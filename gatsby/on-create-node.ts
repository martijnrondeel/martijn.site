import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode, Node } from 'gatsby';
import { Post, AllMarkdownRemarkWithRepositories } from '../src/types';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const nodeCopy = (node as unknown) as Post;

  // Remove any private repositories from our github graphql query result
  if (node.internal.type === 'GithubData') {
    const data = node.data as AllMarkdownRemarkWithRepositories['githubData']['data'];

    data.user.topRepositories.nodes = data.user.topRepositories.nodes.filter(
      (r) => !r.isPrivate,
    );
  }

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
