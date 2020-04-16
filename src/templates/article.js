import React from "react"  
import { graphql } from "gatsby"

// import ReactMarkdown from "react-markdown"  
// import Moment from "react-moment"
// import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import { HomeWrapper, BlogWrapper } from "../components/home/home.css"
import BlogDetails from "../components/blogDetail/blogDetail"

export const query = graphql`  
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      Title
      Description
      category {
        name
      }
      Image {
        childImageSharp {
          fluid(
            maxHeight: 300,
            quality: 90,
            traceSVG: {
              color: "#292733"
              turnPolicy: TURNPOLICY_MAJORITY
            }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      user {
        username
        created_at(formatString: "DD MMM, YYYY")
        updated_at(formatString: "DD MMM, YYYY")
      }
    }
  }
`

const Article = ({ data }) => {  
  const article = data.strapiArticle
  return (
    <Layout>
      <HomeWrapper>
        <BlogWrapper>
          <BlogDetails
            Title={article.Title}
            Image={article.Image}
            Description={article.Description}
            user={article.user}
            category={article.category}
          />
          {/* <h1>{article.Title}</h1>
          <Img fluid={article.Image.childImageSharp.fluid} alt={article.Title} className="blog-image" />
          
          <div className="uk-section">
            <div className="uk-container uk-container-small">
              <ReactMarkdown source={article.Description} />
              <p>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div> */}

        </BlogWrapper>
      </HomeWrapper>
    </Layout>
  )
}

export default Article 