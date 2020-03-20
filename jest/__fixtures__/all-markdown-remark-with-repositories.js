module.exports = {
  allMarkdownRemark: {
    group: [
      {
        fieldValue: 'test_0',
        totalCount: 1,
      },
      {
        fieldValue: 'test_1',
        totalCount: 2,
      },
    ],
    edges: [
      {
        node: {
          fields: {
            slug: '/test_0',
          },
          frontmatter: {
            date: '2016-09-01',
            description: 'test_0',
            title: 'test_0',
            project: 'banana-shop',
          },
        },
      },
      {
        node: {
          fields: {
            slug: '/test_1',
          },
          frontmatter: {
            date: '2016-09-01',
            description: 'test_1',
            title: 'test_1',
          },
        },
      },
    ],
  },
  githubData: {
    data: {
      user: {
        topRepositories: {
          edges: [
            {
              node: {
                name: 'banana-shop',
                description: 'the greatest shop in town',
                url: 'banana.com',
                stargazers: {
                  totalCount: 32,
                },
                isArchived: true,
                pushedAt: '12-03-2008',
              },
            },
          ],
        },
      },
    },
  },
};
