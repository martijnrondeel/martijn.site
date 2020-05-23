import React from 'react';
import { Layout } from '../components/Layout';
import { Sidebar } from '../components/Sidebar';
import { Page } from '../components/Page';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import styles from './index-template.module.scss';

const IndexTemplate = (): JSX.Element => {
  const { subtitle: siteSubtitle, title: siteTitle } = useSiteMetadata();

  return (
    <Layout description={siteSubtitle} title={siteTitle}>
      <Sidebar isIndex />
      <Page>
        <h1>
          <span aria-label='hello' className={styles.wave} role='img'>
            👋
          </span>{' '}
          Hello!
        </h1>
        <p>
          My name is Martijn and I’m a software engineer living in The Netherlands. I’m
          focused on turning ideas into engaging, pragmatic software, creating my best
          work when collaborating closely with stakeholders, designers and developers.
        </p>
        <p>
          In my free time, I enjoy bouldering, photography, playing the piano and
          nurturing my way too large amount of houseplants.{' '}
          <span aria-label='plant' role='img'>
            🌱
          </span>
        </p>
      </Page>
    </Layout>
  );
};

// Currently gatsby requires a 'export default' to exist in the file
// eslint-disable-next-line import/no-default-export
export default IndexTemplate;
