import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { Edges, Repository } from '../../types';
import styles from './Projects.module.scss';

type Props = {
  edges: Edges;
  repositories: Repository[];
};

export const Projects = ({ edges, repositories }: Props): JSX.Element => (
  <div className={styles.projects}>
    {edges.map((edge) => {
      const matchedRepository = repositories.find(
        (repository) => repository.name === edge.node.frontmatter.project,
      );

      const content = (
        <>
          <h2 className={styles['projects__item-title']}>
            {edge.node.frontmatter.title}
          </h2>
          {matchedRepository?.isArchived ? (
            <span className={styles['projects__item-meta-archived']}>Archived</span>
          ) : null}
          <p className={styles['projects__item-description']}>
            {edge.node.frontmatter.description}
          </p>

          <div className={styles['projects__item-meta']}>
            {matchedRepository && matchedRepository.repositoryTopics.nodes.length > 0 ? (
              <div className={styles['projects__item-meta-topics']}>
                {matchedRepository.repositoryTopics.nodes.map((r) => (
                  <div className={styles['projects__item-meta-topic']} key={r.topic.name}>
                    {r.topic.name}
                  </div>
                ))}
              </div>
            ) : null}

            {matchedRepository ? (
              <div className={styles['projects__item-meta-languages']}>
                {matchedRepository.stargazers.totalCount > 0 ? (
                  <div className={styles['projects__item-meta-stars']}>
                    <span className={styles['projects__item-meta-stars-icon']}>★</span>
                    {matchedRepository.stargazers.totalCount}
                  </div>
                ) : null}
                {matchedRepository.languages.nodes.length > 0 ? (
                  <div>
                    {matchedRepository.languages.nodes.map((l) => (
                      <div
                        className={styles['projects__item-meta-language']}
                        key={l.name}>
                        <span
                          className={styles['projects__item-meta-language-color']}
                          style={{ backgroundColor: l.color }}
                        />
                        <span className={styles['projects__item-meta-language-name']}>
                          {l.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </>
      );

      if (matchedRepository) {
        return (
          <OutboundLink
            className={styles.projects__item}
            href={matchedRepository.url}
            key={edge.node.fields.slug}
            rel='noopener noreferrer'
            target='_blank'>
            {content}
          </OutboundLink>
        );
      }

      if (edge.node.frontmatter.tweet) {
        return (
          <OutboundLink
            className={styles.projects__item}
            href={edge.node.frontmatter.tweet}
            key={edge.node.frontmatter.tweet}
            rel='noopener noreferrer'
            target='_blank'>
            {content}
          </OutboundLink>
        );
      }

      return (
        <Link
          className={styles.projects__item}
          key={edge.node.fields.slug}
          to={edge.node.fields.slug}>
          {content}
        </Link>
      );
    })}
  </div>
);
