import styled from 'styled-components';
import { Link } from 'gatsby'

export const CategoryWrapper = styled.div`
  margin-top: 24px;
`;

export const CategoryTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 4px 0;
`;

export const CategoryItem = styled(Link)`
  padding: 6px 12px;
  display: block;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  border-radius: 3px;
  
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(20,20,20,0.1);
  }

`;