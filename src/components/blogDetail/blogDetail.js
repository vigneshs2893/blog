import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown";
import { xs, sm, md } from 'helpers/device';
import UserDetails, { UserDetailsWrapper } from '../userDetails/userDetails';


const BlogDetailsWrapper = styled.div`
  .blog-details-image {
    margin: 0 -12px 24px;

    ${sm} {
      margin: 0 0 40px;
    }

    .banner-image {
      // margin-top: -30px;
      height: 50vh;
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;

      ${sm}{
        height: 40vh;
      }
    }
  }
  
  .blog-details-content {
    margin-bottom: 56px;
    
    ${xs}{
      padding: 0 12px;
    }
    ${md}{
      width: 930px;
      margin: 0 auto 64px;
    }

    p {
      line-height: 150%;
      
      ${sm}{
        font-size: 16px;
        line-height: 160%;
        color: #000000;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.heading-txt {
        margin-bottom: 16px;
        ${sm} {
          color: #292733;
          font-size: 32px;
          line-height: 44px;
        }
      }
    }

    .content-sec {
      .category-txt {        
        ${sm}{
          font-size: 11px;
          letter-spacing: 0.75px;
          line-height: 19px;
        }
      } 

      ${UserDetailsWrapper} {
        .user-details, .date-details {
          ${sm} {
            font-size: 15px;
          }
        }
        
        .user-details {
          ${sm}{
            margin-right: 16px;
          }
        }
  
        .date-details {  
          i {
            ${sm} {
              // font-size: 24px;
            }
          }
        }
      }
    }
  }
`;

const BlogDetails = ({
  Title,
  Image,
  category,
  Description,
  user
}) => {
  return (
    <BlogDetailsWrapper>

      <div className="blog-details-content">
        <div className="content-sec">
          <span className="category-txt">{category.name}</span>
          <h1 className="heading-txt">{Title}</h1>
          <UserDetails {...user} />
          
          <div className="blog-details-image">
            <Img fluid={Image.childImageSharp.fluid} alt={Title} className="banner-image" />
          </div>

        </div>

        <ReactMarkdown source={Description} />
      </div>
    </BlogDetailsWrapper>
  );
};

export default BlogDetails;
