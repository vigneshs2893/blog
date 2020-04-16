import styled from 'styled-components';
import { xs, sm, md } from 'helpers/device';

export const BlogWrapper = styled.div`
  p {
    font-size: 12px;
    line-height: 155%;
    margin-bottom: 24px;
    color: #292733;

    ${sm}{
      font-size: 14px;
      line-height: 145%;
    }
    
    &.heading-txt {
      font-size: 15px;
      line-height: 140%;
      font-weight: 600;
      color: #3B3848;
      padding-right: 16%;
      margin-bottom: 8px;
      transition: all .3s ease-in-out;
      ${sm} {
        color: #292733;
        font-size: 22px;
        line-height: 27px;
      }
    }
    
    &.txt {
      display: -webkit-box;
      display: -moz-box;
      -webkit-line-clamp: 2;
      -moz-line-clamp: 2;
      overflow: hidden;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      /* autoprefixer: on */

      ${sm}{
      -webkit-line-clamp: 3;
      -moz-line-clamp: 3;
      }
    }
  }

  .content-sec {
    margin-bottom: 32px;

    .category-txt {
      display: block;
      color: #525252;
      font-weight: 600;
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    } 
  }

  .blog-banner {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 24px;
    
    ${sm}{
      margin-bottom: 48px;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      mix-blend-mode: hard-light;
      background: linear-gradient(180deg, #E64545 0%, #C23232 39.46%, #A22121 100%);
    }

    &:hover {
      .blog-banner-img {
        transform: scale(1.04);
      }
    }

    .blog-banner-img {
      width: 100%;
      height: 576px;
      object-fit: cover;
      transition: all .6s ease;

      ${sm}{
        height: 420px;
      }
      ${md}{
        height: 600px;
      }
    }

    .content-sec {
      width: 456px;
      padding: 32px;
      position: absolute;
      right: 64px;
      bottom: 32px;
      background-color: #FFFFFF;
      z-index: 1;
      margin-bottom: 0;

      ${md}{
        right: 96px;
        bottom: 56px;
      }

      p {
        &.txt {
          ${sm}{
          -webkit-line-clamp: 2;
          -moz-line-clamp: 2;
          }
        }
      }
    }

  }

  .btn {
    background: #FFFFFF;
    color: #3B3848;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    transition: all .5s;
    border-radius: 0;
    border: 1px solid #E1E1E1;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    
    ${xs}{
      padding: 14px 24px;
    }
    
    ${sm} {
      font-size: 16px;
      line-height: 22px;
      border: 0;
    }

    &:hover {
      transform: translateY(-4px);
    }

    &:focus {
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const HomeWrapper = styled.div`
  padding-top: 100px;

  ${xs} {
    padding-top: 88px;
  }

  @media(max-width: 991px) {
    // top: 32px;
    min-height: 72px;
  }

  h3 {
    font-size: 20px;
    line-height: 120%;
    color: #292733;
    margin: 0 0 8px;
    font-weight: 500;

    ${sm} {
      font-size: 28px;
    }
  }

  p {
    line-height: 140%;
    margin-bottom: 16px;
    
    ${xs} {
      font-size: 12px;
    }
  }

  h5 {
    font-size: 14px;
    line-height: 140%;
    font-weight: 700;
    margin-bottom: 12px;
    ${sm}{
      font-size: 16px;
    }
  }

  .info-title {
    color: #777;
    font-size: 22px;
    margin-bottom: 24px;
  }
`;
