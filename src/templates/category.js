import React from "react"

import Layout from "../components/layout/layout"
import { HomeWrapper, BlogWrapper } from "../components/home/home.css"
import { graphql } from "gatsby"
import BlogCard from "../components/blogCard/blogCard"
import { SearchContainer } from "../components/nav/nav.css"
import Category from "../components/category/category";

const CategoryPage = ({ data }) => {
  return (
    <Layout>
      {/* home page starts */}
      <HomeWrapper>
        <BlogWrapper>
          <div className="container lg-container xs-fullwidth">
            <div className="row">
              <div className="col-sm-9">
                <h3 className="info-title">Search results for <i>{data.category.name}</i></h3>
                {
                  data.articles.edges.map(item => (
                    <BlogCard
                      key={item.node.id}
                      {...item.node}
                    />
                  ))
                }
              </div>
              <div className="col-sm-3">
                <SearchContainer>
                  <input type="text" placeholder="Search" />
                </SearchContainer>
                <Category />
              </div>
              {/* <div className="col-sm-6"><BlogCard /></div>
              <div className="col-sm-6"><BlogCard /></div>
              <div className="col-sm-6"><BlogCard /></div> */}
            </div>
          </div>
        </BlogWrapper>
      </HomeWrapper>
      {/* home page ends */}
    </Layout>
  )
}

export const query = graphql`
  query CategoryPageQuery($id: Int!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          id
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
    }

    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`;

export default CategoryPage
