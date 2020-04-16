import styled from 'styled-components';
import { sm } from 'helpers/device';

export const ClientLogoSection = styled.div`
  background: #F4F4F4;
  padding: 32px 0;
  text-align: center;
  // margin-bottom: 64px;
  ${sm} {
    // margin-bottom: 120px;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    ${sm}{
      width: 70%;
    }

    li {
      flex: 1 1;

      img {
        height: 20px;
        ${sm} {
          height: 28px;
        }
      }
    }
  }
`;
