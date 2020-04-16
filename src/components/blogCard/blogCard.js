import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image"
import { sm, md } from 'helpers/device';
import UserDetails from '../userDetails/userDetails';
import { slugify } from '../../helpers/utils';

const BlogCardWrapper = styled(Link)`
  display: block;
  cursor: pointer;
  margin-bottom: 48px;
  
  ${md}{
    &:hover {
      .blog-image-wrapper {
        .blog-image {
          transform: scale(1.08);
        }


        
          color: blue !important;
        }
      }
    }
  }

  ${sm} {
    &:hover {
      p.heading-txt {
        color: #276ef1;
      }
    }
  }

  .blog-image-wrapper {
    height: 224px;
    margin-bottom: 12px;
    overflow: hidden;

    ${sm}{
      height: 268px;
      margin-bottom: 16px;
    }

    ${md}{
      height: 360px;
    }

    .blog-image {
      width: 100%;
      height: 100%;
      object-fit: cover;  
      transition: all .6s ease;
    }
  }

  a.btn-more {
    padding: 8px 16px;
    color: #222;
    border: 1px solid #2d2d2d;
    background-image: linear-gradient(to left,
      transparent,
      transparent 50%,
      #2d2d2d 50%,
      #2d2d2d);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .25s ease-in;

    i {
      vertical-align: middle;
      margin-left: 8px;
    }

    &:hover,
    &:focus,
    &:active {
      background-position: 0 0;
      color:#fdfdfd;
    }
  }
`;

const BlogCard = ({
  strapiId,
  Title,
  Image,
  category,
  Description,
  user,
}) => {
  return (
    <BlogCardWrapper to={`/article/${strapiId}/${slugify(Title)}`}>
      <div className="content-sec">
        <span className="category-txt">{(category.name || "").replace("_", " ")}</span>
        <p className="heading-txt">{Title}</p>
        <UserDetails {...user} />
        <div className="blog-image-wrapper">
          <Img fluid={Image.childImageSharp.fluid} alt={Title} className="blog-image" />
        </div>
        <ReactMarkdown className="txt" source={`${Description.substr(0, 240)}...`} />
        <a className="btn-more" href="/">
          Read more
          <i className="pf-arrow-right" />
        </a>
      </div>
    </BlogCardWrapper>
  );
};

export default BlogCard;
