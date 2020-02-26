import React from 'react';
import styles from './Footer.module.scss';

type Props = {
  copyright: string;
  repo: string;
};

const Footer = ({ copyright, repo }: Props) => (
  <div className={styles.footer}>
    Source @{' '}
    <a href={repo} rel='noopener noreferrer' target='_blank'>
      GitHub
    </a>
    <br />
    {copyright}
  </div>
);

export default Footer;
