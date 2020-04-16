import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { slugify } from '../../helpers/utils';
import { CategoryWrapper, CategoryTitle, CategoryItem } from './category.css';

const Category = ({}) => {
  const data = useStaticQuery(graphql`
    query CategoriesList {
      allStrapiCategory {
        edges {
          node {
            name
            id
            strapiId
          }
        }
      }
    }
  `);

  return (
    <CategoryWrapper>
      <CategoryTitle>Categories</CategoryTitle>
      <div>
        {
          data.allStrapiCategory.edges.map(item => (
            <CategoryItem key={item.node.id} to={`/category/${item.node.strapiId}/${slugify(item.node.name)}`}>{item.node.name}</CategoryItem>
          ))
        }
      </div>
    </CategoryWrapper>
  )
}

export default Category;