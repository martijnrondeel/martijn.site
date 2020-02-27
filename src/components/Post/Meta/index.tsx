import React from 'react';
import { format } from 'date-fns';
import styles from './Meta.module.scss';

type Props = {
  date: string;
};

export const Meta = ({ date }: Props) => (
  <div className={styles.meta}>
    <p className={styles.meta__date}>Published {format(new Date(date), 'd MMM yyyy')}</p>
  </div>
);
