import React from 'react';
import IsMobile from 'helpers/IsMobile';
import { HeaderWrapper, HeaderInner } from './header.css';
import { Link } from '@reach/router';
import LogoSVG from '-!svg-react-loader!images/logo.svg';
import Nav from '../nav/nav';

const isMobileDevice = IsMobile();

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/" className="site-logo">
          <LogoSVG height={isMobileDevice ? '30' : '42'} />
        </Link>

        <Nav />

      </HeaderInner>
      {/* <div className="container lg-container xs-full-width">
        <div className="row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>Search</div>
        </div>
      </div> */}
    </HeaderWrapper>
  );
};

export default Header;
