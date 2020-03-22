import React from 'react';
import { Link } from 'gatsby';
import { Edges, Project } from '../../types';
import styles from './Projects.module.scss';

type Props = {
  edges: Edges;
  repositories: Array<{
    node: Project;
  }>;
};

export const Projects = ({ edges, repositories }: Props) => (
  <div className={styles.projects}>
    {edges.map((edge) => {
      const matchedRepository = repositories.find(
        (repository) => repository.node.name === edge.node.frontmatter.project,
      );

      return (
        <div className={styles.projects__item} key={edge.node.fields.slug}>
          <div className={styles['projects__item-meta']}>
            {matchedRepository ? (
              <span className={styles['projects__item-meta-stars']}>
                {matchedRepository.node.stargazers.totalCount} ★
              </span>
            ) : null}
            {matchedRepository?.node.isArchived ? (
              <span className={styles['projects__item-meta-archived']}>Archived</span>
            ) : null}
            <span className={styles['projects__item-meta-divider']} />
          </div>
          <h2 className={styles['projects__item-title']}>
            <Link
              className={styles['projects__item-title-link']}
              to={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles['projects__item-description']}>
            {edge.node.frontmatter.description}
          </p>
          <Link className={styles['projects__item-readmore']} to={edge.node.fields.slug}>
            Read
          </Link>
          <Link className={styles['projects__item-readmore']} to={edge.node.fields.slug}>
            View on GitHub
          </Link>
        </div>
      );
    })}
  </div>
);
