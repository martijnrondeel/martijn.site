import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Sidebar } from '../components/Sidebar';
import { Page } from '../components/Page';
import { Pagination } from '../components/Pagination';
import { PageContext, AllMarkdownRemarkWithRepositories } from '../types';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Projects } from '../components/Projects';

type Props = {
  data: AllMarkdownRemarkWithRepositories;
  pageContext: PageContext;
};

const ProjectsListTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath,
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const repositories = data.githubData.data.user.topRepositories.edges;
  const pageTitle =
    currentPage > 0 ? `Projects - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout description={siteSubtitle} title={pageTitle}>
      <Sidebar isIndex />
      <Page>
        <Projects edges={edges} repositories={repositories} />
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
  query ProjectsListTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            project
          }
        }
      }
    }
    githubData {
      data {
        user {
          topRepositories {
            edges {
              node {
                name
                description
                url
                stargazers {
                  totalCount
                }
                isArchived
                pushedAt
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectsListTemplate;
