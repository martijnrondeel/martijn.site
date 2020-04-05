import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { getContactHref } from '../../../utils/get-contact-href';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks/use-site-metadata';

export const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p className={styles.author__bio}>
        {author.bio}
        <OutboundLink
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel='noopener noreferrer'
          target='_blank'>
          <strong>{author.name}</strong> on Twitter
        </OutboundLink>
      </p>
    </div>
  );
};
