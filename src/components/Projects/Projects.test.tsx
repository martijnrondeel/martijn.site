import React from 'react';
import renderer from 'react-test-renderer';
import { Projects } from '.';

describe('projects', () => {
  const props = {
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
          timeToRead: 3,
          id: 'test-123',
          html: '<p>test</p>',
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
          timeToRead: 1,
          id: 'test-321',
          html: '<p>test</p>',
        },
      },
    ],
    repositories: [],
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Projects {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
