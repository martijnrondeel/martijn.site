import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Post } from '../components/Post';
import { Post as PostType } from '../types';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Sidebar } from '../components/Sidebar';
import { Page } from '../components/Page';

type Props = {
  data: {
    markdownRemark: PostType;
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
      <Sidebar />
      <Page>
        <Post post={data.markdownRemark} />
      </Page>
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
      }
      frontmatter {
        date
        description
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
