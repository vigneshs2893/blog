import styled from 'styled-components';

export const MenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;

  > li {
    display: block;
    float: left;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
    cursor: pointer;

    margin-left: 0;
    margin-right: 20px;
    margin-bottom: 0;

    > a {
      display: block;
      color: #fdfdfd;
      font-size: 14px;
      padding: 9px 1rem;
      position:relative;

      &:before {
        color: inherit;
        content: "\\e902";
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        font-family: "pentafox";
        line-height: 1;
        speak: none;
        text-transform: none;
      }
    }

    ul.sub-menu {
      opacity: 0;
      transition: opacity .25s,visibility .25s,max-height .5s;
      visibility: hidden;
      
      background-color: #c91c1f;
      display: block;
      list-style-type: none;
      padding: 0;
      padding-top: 0.75rem;
      margin-top: 0;
      max-height: 0;
      min-width: 180px;
      position: absolute;
      right: -12px;
      z-index: 30;

      li {
        background-color: #000;
        margin-right: 0;
        clear: both;
        width: 100%;

        a {
          color: #fdfdfd;
          display: block;
          font-size: 14px;
          padding: 9px 1rem;
          background-color: #c91c1f;
          // border-left: 3px solid transparent;
          transition: all 0.3s ease-in-out;
          
          &:hover,
          &:focus,
          &:active {
            background-color: #b70a0d;
            // border-left-color: #333;
          }
        }
      }

      &:hover,
      &:focus,
      &:active {
        opacity: 1;
        visibility: visible;
      }
    }

    &:hover,
    &:focus,
    &:active {
      ul.sub-menu {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;
