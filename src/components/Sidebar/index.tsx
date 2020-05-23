import React from 'react';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { Menu } from './Menu';
import styles from './Sidebar.module.scss';
import { Author } from './Author';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

type Props = {
  isIndex?: boolean;
};

export const Sidebar = ({ isIndex }: Props): JSX.Element => {
  const { author, copyright, repo, menu } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Footer copyright={copyright} repo={repo} />
      </div>
    </div>
  );
};
