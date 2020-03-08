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
};
