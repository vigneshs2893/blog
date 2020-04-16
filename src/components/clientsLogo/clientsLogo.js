import React from 'react';
import IsMobile from 'helpers/IsMobile';
import { ClientLogoSection } from './clientsLogo.css';

const ClientLogo = () => {
  const isMobileDevice = IsMobile();
  return (
    <ClientLogoSection>
      <div className="container">
        <h3>Client Logo</h3>
        {isMobileDevice ?
          <p>We take responsibility to increase your business tremendously with technological advantage and support you to stand out uniquely and consistently in the market.</p>
          :
          <p>We take responsibility to increase your business tremendously with technological <br /> advantage and support you to stand out uniquely and consistently in the market.</p>
        }

        <ul className={`ml-auto mr-auto ${isMobileDevice ? 'mb-16' : 'mb-24'}`}>
          <li><img src="./image/prodjar-logo.png" alt="client-logo" /></li>
          <li><img src="./image/prodjar-logo.png" alt="client-logo" /></li>
          <li><img src="./image/prodjar-logo.png" alt="client-logo" /></li>
          {!isMobileDevice ?
            <li><img src="./image/prodjar-logo.png" alt="client-logo" /></li>
          : null}
        </ul>
        <ul class="ml-auto mr-auto mb-0">
          <li><img src="./image/prodjar-logo.png" alt="client-logo" /></li>
          <li><img src="./image/prodjar-logo.png" alt="client-logo" /></li>
        </ul>
      </div>
    </ClientLogoSection>
  );
};

export default ClientLogo;