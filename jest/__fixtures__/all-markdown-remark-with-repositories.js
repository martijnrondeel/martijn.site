module.exports = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: 'test-1',
          html: '<p>test</p>',
          timeToRead: 3,
          fields: {
            slug: 'test-1',
          },
          frontmatter: {
            date: '2016-09-01',
            description: 'test 1',
            title: 'test 1',
            project: 'martijn.site',
            template: 'project',
          },
        },
      },
      {
        node: {
          id: 'test-2',
          html: '<p>test</p>',
          timeToRead: 32,
          fields: {
            slug: 'test-2',
          },
          frontmatter: {
            date: '2016-09-02',
            description: 'test 2',
            title: 'test 2',
            template: 'post',
          },
        },
      },
      {
        node: {
          id: 'test-3',
          html: '<p>test</p>',
          timeToRead: 3,
          fields: {
            slug: 'test-3',
          },
          frontmatter: {
            date: '2018-09-01',
            description: 'test 3',
            title: 'test 3',
            tweet: 'https://twitter.com/martijnrondeel/status/1084478682515808257',
            template: 'tweet',
          },
        },
      },
    ],
  },
  githubData: {
    data: {
      user: {
        topRepositories: {
          nodes: [
            {
              name: 'martijn.site',
              description: 'Personal website',
              url: 'https://github.com/martijnrondeel/martijn.site',
              stargazers: {
                totalCount: 2,
              },
              isArchived: false,
              pushedAt: '2020-04-05T14:38:20Z',
              languages: {
                nodes: [
                  {
                    name: 'TypeScript',
                    color: '#2b7489',
                  },
                  {
                    name: 'CSS',
                    color: '#563d7c',
                  },
                  {
                    name: 'JavaScript',
                    color: '#f1e05a',
                  },
                ],
              },
              repositoryTopics: {
                nodes: [
                  {
                    topic: {
                      name: 'personal-website',
                    },
                  },
                  {
                    topic: {
                      name: 'gatsby',
                    },
                  },
                  {
                    topic: {
                      name: 'react',
                    },
                  },
                  {
                    topic: {
                      name: 'nodejs',
                    },
                  },
                  {
                    topic: {
                      name: 'typescript',
                    },
                  },
                  {
                    topic: {
                      name: 'github-actions',
                    },
                  },
                  {
                    topic: {
                      name: 'graphql',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};
