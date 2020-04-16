import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { NavWrapper } from './nav.css';
import { MenuWrapper } from '../menu/menu.css';
import { slugify } from '../../helpers/utils';

const Nav = () => {
  const data = useStaticQuery(graphql`
    query CategoriesMenu {
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
    <NavWrapper role="navigation">
      <MenuWrapper>
        <li>
          <a href="">
            Category
          </a>
          <ul className="sub-menu">
            {
              data.allStrapiCategory.edges.map(item => (
                <li>
                  <Link to={`/category/${item.node.strapiId}/${slugify(item.node.name)}`}>{item.node.name}</Link>
                </li>
              ))
            }
          </ul>
        </li>
      </MenuWrapper>
    </NavWrapper>
  )
}

export default Nav