import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';

type Props = {
  tags: string[];
  tagSlugs: string[];
};

export const Tags = ({ tags, tagSlugs }: Props) => (
  <div className={styles.tags}>
    <ul className={styles.tags__list}>
      {tagSlugs?.map((slug, i) => (
        <li className={styles['tags__list-item']} key={tags[i]}>
          <Link className={styles['tags__list-item-link']} to={slug}>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
