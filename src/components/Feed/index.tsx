import React from 'react';
import { format } from 'date-fns';
import { Link } from 'gatsby';
import { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges;
};

export const Feed = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <Link
        className={styles.feed__item}
        key={edge.node.fields.slug}
        to={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time
            className={styles['feed__item-meta-time']}
            dateTime={format(new Date(edge.node.frontmatter.date), 'MMMM d, yyyy')}>
            {format(new Date(edge.node.frontmatter.date), 'MMMM d, yyyy')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-readtime']}>
            {edge.node.timeToRead} minute{edge.node.timeToRead > 1 ? 's' : ''} read
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>{edge.node.frontmatter.title}</h2>
        <p className={styles['feed__item-description']}>
          {edge.node.frontmatter.description}
        </p>
      </Link>
    ))}
  </div>
);
