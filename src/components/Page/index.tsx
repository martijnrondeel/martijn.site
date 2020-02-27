import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string;
  children: React.ReactNode;
};

export const Page = ({ title, children }: Props) => {
  const pageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pageRef?.current) {
      pageRef.current.scrollIntoView();
    }
  });

  return (
    <div className={styles.page} ref={pageRef}>
      <div className={styles.page__inner}>
        {title && <h1 className={styles.page__title}>{title}</h1>}
        <div className={styles.page__body}>{children}</div>
      </div>
    </div>
  );
};
