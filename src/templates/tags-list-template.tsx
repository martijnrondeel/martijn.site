import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import useSiteMetadata from '../hooks/use-site-metadata';
import useTagsList from '../hooks/use-tags-list';
import { kebabCase } from '../utils/kebabcase';

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout description={subtitle} title={`Tags - ${title}`}>
      <Sidebar />
      <Page title='Tags'>
        <ul>
          {tags.map((tag: any) => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
