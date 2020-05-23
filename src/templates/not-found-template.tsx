import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const NotFoundTemplate = (): JSX.Element => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout description={subtitle} title={`Not Found - ${title}`}>
      <Sidebar />
      <Page title='Not found'>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </Page>
    </Layout>
  );
};

// Currently gatsby requires a 'export default' to exist in the file
// eslint-disable-next-line import/no-default-export
export default NotFoundTemplate;
