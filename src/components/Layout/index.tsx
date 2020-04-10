import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import styles from './Layout.module.scss';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
};

export const Layout = ({ children, title, description, socialImage }: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = `${url}${withPrefix(metaImage)}`;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta content={description} name='description' />
        <meta content={title} property='og:site_name' />
        <meta content={metaImageUrl} property='og:image' />
        <meta content='summary' name='twitter:card' />
        <meta content={title} name='twitter:title' />
        <meta content={description} name='twitter:description' />
        <meta content={metaImageUrl} name='twitter:image' />
      </Helmet>
      {children}
    </div>
  );
};
