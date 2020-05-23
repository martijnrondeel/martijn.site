import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import styles from './Footer.module.scss';

type Props = {
  copyright: string;
  repo: string;
};

export const Footer = ({ copyright, repo }: Props): JSX.Element => (
  <div className={styles.footer}>
    Source @{' '}
    <OutboundLink href={repo} rel='noopener noreferrer' target='_blank'>
      GitHub
    </OutboundLink>
    <br />
    {copyright}
  </div>
);
