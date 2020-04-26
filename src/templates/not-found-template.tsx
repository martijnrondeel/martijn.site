import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const NotFoundTemplate = () => {
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

export default NotFoundTemplate;
