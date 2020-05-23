import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: Array<{
    label: string;
    path: string;
  }>;
};

export const Menu = ({ menu }: Props): JSX.Element => (
  <nav className={styles.menu}>
    <ul className={styles.menu__list}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            activeClassName={styles['menu__list-item-link--active']}
            className={styles['menu__list-item-link']}
            to={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
