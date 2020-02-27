import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { useSiteMetadata } from '../../../hooks/use-site-metadata';

type Props = {
  postTitle: string;
  postSlug: string;
};

export const Comments = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      identifier={postTitle}
      shortname={disqusShortname}
      title={postTitle}
      url={`${url}${postSlug}`}
    />
  );
};
