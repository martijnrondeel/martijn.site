import React from 'react';
import { Layout } from '../components/Layout';
import { Sidebar } from '../components/Sidebar';
import { Page } from '../components/Page';
import { useSiteMetadata } from '../hooks/use-site-metadata';

const IndexTemplate = () => {
  const { subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout description={siteSubtitle} title={'index page hi'}>
      <Sidebar isIndex />
      <Page>Hi there, this is index page :)</Page>
    </Layout>
  );
};

export default IndexTemplate;
