import React from 'react';
import { Comments } from './Comments';
import { Content } from './Content';
import { Meta } from './Meta';
import styles from './Post.module.scss';
import { Post as PostType } from '../../types';

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  const { html, id } = post;
  const { slug } = post.fields;
  const { title, date } = post.frontmatter;

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <Content body={html} title={title} />
      </div>

      <div className={styles.post__footer}>
        <Meta date={date} />
      </div>

      <div className={styles.post__comments}>
        <Comments postId={id} postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};
