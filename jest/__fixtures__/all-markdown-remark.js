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
          },
        },
      },
    ],
  },
};
