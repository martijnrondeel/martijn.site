import { ReactNode } from 'react';

export type RenderCallback = {
  render: (data: any) => ReactNode;
};

export type PageContext = {
  currentPage: number;
  prevPagePath: string;
  nextPagePath: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export type Post = {
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    description?: string;
    title: string;
    socialImage?: string;
    template?: string;
    slug?: string;
    project?: string;
  };
  timeToRead: number;
  html: string;
  id: string;
};

export type Repository = {
  name: string;
  description: string;
  url: string;
  stargazers: {
    totalCount: number;
  };
  languages: {
    nodes: Array<{
      name: string;
      color: string;
    }>;
  };
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string;
      };
    }>;
  };
  isArchived: boolean;
  pushedAt: string;
};

export type Edges = Array<{
  node: Post;
}>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges;
  };
};

export type AllMarkdownRemarkWithRepositories = AllMarkdownRemark & {
  githubData: {
    data: {
      user: {
        topRepositories: {
          nodes: Repository[];
        };
      };
    };
  };
};
