import React from 'react';
import styles from './Icon.module.scss';
import { Icon as IconType } from '../../types';

type Props = {
  name: string;
  icon: IconType;
};

export const Icon = ({ name, icon }: Props): JSX.Element => (
  <svg className={styles.icon} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);
