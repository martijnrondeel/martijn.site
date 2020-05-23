import { useStaticQuery, graphql } from 'gatsby';
import { siteMetaData } from '../types';

export const useSiteMetadata = (): siteMetaData['site']['siteMetadata'] => {
  const { site }: siteMetaData = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            repo
            disqusShortname
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};
