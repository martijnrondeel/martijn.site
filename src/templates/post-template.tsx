import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Post } from '../components/Post';
import { MarkdownRemark } from '../types';
import useSiteMetadata from '../hooks/use-site-metadata';

type Props = {
  data: {
    markdownRemark: MarkdownRemark;
  };
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout
      description={metaDescription}
      socialImage={socialImage}
      title={`${postTitle} - ${siteTitle}`}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
