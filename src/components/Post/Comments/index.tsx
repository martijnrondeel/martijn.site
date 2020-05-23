import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { useSiteMetadata } from '../../../hooks/use-site-metadata';

type Props = {
  postTitle: string;
  postSlug: string;
  postId: string;
};

export const Comments = ({ postTitle, postSlug, postId }: Props): JSX.Element => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      identifier={postId}
      shortname={disqusShortname}
      title={postTitle}
      url={`${url}${postSlug}`}
    />
  );
};
