import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Sidebar } from '../components/Sidebar';
import { Feed } from '../components/Feed';
import { Page } from '../components/Page';
import { Pagination } from '../components/Pagination';
import { PageContext, AllMarkdownRemark } from '../types';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type Props = {
  data: AllMarkdownRemark;
  pageContext: PageContext;
};

const PostsListTemplate = ({ data, pageContext }: Props): JSX.Element => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle =
    currentPage > 0 ? `Blog - Page ${currentPage} - ${siteTitle}` : `Blog - ${siteTitle}`;

  return (
    <Layout description={siteSubtitle} title={pageTitle}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          nextPagePath={nextPagePath}
          prevPagePath={prevPagePath}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PostsListTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;

// Currently gatsby requires a 'export default' to exist in the file
// eslint-disable-next-line import/no-default-export
export default PostsListTemplate;
