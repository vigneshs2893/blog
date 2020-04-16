import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #c91c1f;
  position: fixed;
  top: 0px;
  z-index: 10;
  box-shadow: none;
  display: block;
  box-shadow: 0 1px 3px #444;
  color: #fff;
  font-size: 16px;


  @media(max-width: 991px) {
    // top: 32px;
    min-height: 72px;
  }

  a {
    display: inline-block;
  }
`;

export const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  height: 84px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0.75rem;
  position: static;
  top: 0;
  width: 100%;

  flex-wrap: wrap;
  height: auto;
  padding: 1rem;

  .site-logo {
    margin: auto;
    align-items: center;
    display: flex;
    flex: 0;
    color: #fff;
  }
`;
