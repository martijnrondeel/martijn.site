import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Sidebar from '../components/Sidebar';
import useSiteMetadata from '../hooks/use-site-metadata';
import useCategoriesList from '../hooks/use-categories-list';
import { kebabCase } from '../utils/kebabcase';

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout description={subtitle} title={`Categories - ${title}`}>
      <Sidebar />
      <Page title='Categories'>
        <ul>
          {categories.map((category: any) => (
            <li key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
