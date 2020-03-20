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

export type Project = {
  name: string;
  description: string;
  url: string;
  stargazers: {
    totalCount: number;
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
  group: Array<{
    fieldValue: string;
    totalCount: number;
  }>;
};

export type AllMarkdownRemarkWithRepositories = AllMarkdownRemark & {
  githubData: {
    data: {
      user: {
        topRepositories: {
          edges: Array<{
            node: Project;
          }>;
        };
      };
    };
  };
};
