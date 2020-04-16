import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  margin: auto;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(20, 20, 20, 0.5);
  padding: 0 4px;
  padding-right: 32px;
  position: relative;
  margin-top: 24px;

  input {
    border: none;
    background: transparent;
    outline: none;
    padding: 4px;
    color: #333;

    &::placeholder {
      color: rgba(20, 20, 20, 0.5);
    }
  }

  &:before {
    content: '\\e906';
    font-family: "pentafox";
    font-size: 16px;
    position: absolute;
    right: 8px;
    bottom: 4px;
  }
`;