import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Sidebar } from '../components/Sidebar';
import { Page } from '../components/Page';
import { AllMarkdownRemarkWithRepositories } from '../types';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Projects } from '../components/Projects';

type Props = {
  data: AllMarkdownRemarkWithRepositories;
};

const ProjectsListTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  console.log(data);

  const { edges } = data.allMarkdownRemark;
  const repositories = data.githubData.data.user.topRepositories.nodes;

  return (
    <Layout description={siteSubtitle} title={siteTitle}>
      <Sidebar isIndex />
      <Page>
        <Projects edges={edges} repositories={repositories} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
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
            nodes {
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
`;

export default ProjectsListTemplate;
