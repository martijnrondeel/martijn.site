import { config } from 'dotenv';
import { siteConfig } from './config';
import { postCssPlugins } from './postcss-config';
import { Edges } from './src/types';

// Load .env environment variables into process.env
config();

// eslint-disable-next-line import/no-default-export
export default {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    repo: siteConfig.repo,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'css',
        path: `${__dirname}/static/css`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GITHUB_API_TOKEN,
        graphQLQuery: `
        query ($author: String = "", $repositories: Int = 0) {
          user(login: $author) {
            topRepositories(first: $repositories, orderBy: {field: PUSHED_AT, direction: DESC}) {
              nodes {
                name
                description
                url
                stargazers {
                  totalCount
                }
                isArchived
                isPrivate
                pushedAt
                languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                  nodes {
                    name
                    color
                  }
                }
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
        `,
        variables: {
          repositories: 50,
          author: 'martijnrondeel',
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              withWebp: true,
              ignoreFileExtensions: [],
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [siteConfig.googleAnalyticsId],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: '/sitemap.xml',
        serialize: ({
          site,
          allSitePage,
        }: {
          site: { siteMetadata: { siteUrl: string } };
          allSitePage: { edges: Edges };
        }) =>
          allSitePage.edges.map((edge) => ({
            url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
            changefreq: 'daily',
            priority: 0.7,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#F7A046',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-plugin-optimize-svgs',
  ],
};
