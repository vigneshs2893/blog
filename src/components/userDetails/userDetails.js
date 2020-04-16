import React from 'react';
import styled from 'styled-components';
import { xs, sm } from 'helpers/device';

export const UserDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  ${xs}{
  }

  .user-details, .date-details {
    display: flex;
    align-items: center;
    font-size: 11px;
    line-height: 1;
    color: #525252;
    i {
      font-size: 11px;
      margin-right: 4px;
    }
    ${sm} {
      font-size: 12px;
      i {
        font-size: 12px;
      }
    }


    img, i {
      // margin-right: 8px;
      ${sm} {
        // margin-right: 12px;
      }
    }
  }
  
  .user-details {
    ${sm}{
      // margin-right: 24px;
    }

    img {
      display: inline-block;
      width: 24px;
      height: 24px;
      object-fit: cover;
      border-radius: 100%;
      background-color: #525252;
    }
  }

  .date-details {  
    i {
      color: #525252;
      display: inline-block;
      // font-size: 18px;

      ${sm} {
        font-size: 14px;
      }
    }
  }
`;

const UserDetails = ({
  username,
  created_at,
  updated_at,
}) => {
  return (
    <UserDetailsWrapper>
      <span className="user-details">
        <i className="pf-user" />
        {/* <img src="./image/emma.png" alt="#" /> */}
        {`${username.substr(0,1).toUpperCase()}${username.substr(1)}`}
      </span>
      <span className="date-details">
        <i className="pf-calendar" />
        Posted on {created_at}
      </span>
    </UserDetailsWrapper>
  );
};

export default UserDetails;
