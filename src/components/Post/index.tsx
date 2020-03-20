import React from 'react';
import { Link } from 'gatsby';
import { Comments } from './Comments';
import { Content } from './Content';
import { Meta } from './Meta';
import styles from './Post.module.scss';
import { Post as PostType } from '../../types';
import { Author } from './Author';

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  const { html } = post;
  const { slug } = post.fields;
  const { title, date } = post.frontmatter;

  return (
    <div className={styles.post}>
      <Link className={styles['post__home-button']} to='/blog'>
        All Articles
      </Link>

      <div className={styles.post__content}>
        <Content body={html} title={title} />
      </div>

      <div className={styles.post__footer}>
        <Meta date={date} />
        <Author />
      </div>

      <div className={styles.post__comments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};
