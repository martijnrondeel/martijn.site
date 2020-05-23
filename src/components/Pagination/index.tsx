import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

type Props = {
  prevPagePath: string;
  nextPagePath: string;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const cx = classNames.bind(styles);

export const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}: Props): JSX.Element => {
  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage,
  });

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage,
  });

  return (
    <div className={styles.pagination}>
      {hasPrevPage || hasNextPage ? ( // Only show prev and next buttons if there are multiple pages
        <>
          <div className={styles.pagination__prev}>
            <Link
              className={prevClassName}
              rel='prev'
              to={hasPrevPage ? prevPagePath : '/'}>
              {PAGINATION.PREV_PAGE}
            </Link>
          </div>
          <div className={styles.pagination__next}>
            <Link
              className={nextClassName}
              rel='next'
              to={hasNextPage ? nextPagePath : '/'}>
              {PAGINATION.NEXT_PAGE}
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};
