import { useStaticQuery, graphql } from 'gatsby';

export const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  return allMarkdownRemark.group;
};
