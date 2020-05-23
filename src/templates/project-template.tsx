import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Sidebar } from '../components/Sidebar';
import { Page } from '../components/Page';
import { Post } from '../types';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type Props = {
  data: {
    markdownRemark: Post;
  };
};

const ProjectTemplate = ({ data }: Props): JSX.Element => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: projectTitle, description: pageDescription, socialImage } = frontmatter;
  const metaDescription = pageDescription === null ? siteSubtitle : pageDescription;

  return (
    <Layout
      description={metaDescription}
      socialImage={socialImage}
      title={`${projectTitle} - ${siteTitle}`}>
      <Sidebar />
      <Page title={projectTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

// Currently gatsby requires a 'export default' to exist in the file
// eslint-disable-next-line import/no-default-export
export default ProjectTemplate;
