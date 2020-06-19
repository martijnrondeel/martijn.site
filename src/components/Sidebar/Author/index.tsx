import React from 'react';
import { Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string;
    bio: string;
    photo: string;
  };
  isIndex?: boolean;
};

export const Author = ({ author, isIndex }: Props): JSX.Element => (
  <div className={styles.author}>
    <Link to='/'>
      <img
        alt={author.name}
        className={styles.author__photo}
        height='120'
        src={author.photo}
        width='120'
      />
    </Link>

    {isIndex === true ? (
      <h1 className={styles.author__title}>
        <Link className={styles['author__title-link']} to='/'>
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles.author__title}>
        <Link className={styles['author__title-link']} to='/'>
          {author.name}
        </Link>
      </h2>
    )}
    <p className={styles.author__subtitle}>
      Software engineer with an interest in the <Link to='/'>web</Link>,{' '}
      <Link to='/'>creative coding</Link> & <Link to='/'>more</Link>.
    </p>
  </div>
);
