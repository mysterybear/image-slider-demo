import { graphql, PageProps } from "gatsby"
import React from "react"
import { ImageSlider } from "../components/ImageSlider"
import Layout from "../layouts"
import { Node__RecipeConnection } from "../typings/graphql-types"

interface IndexPageProps extends PageProps {
  data: {
    allNodeRecipe: Node__RecipeConnection
  }
}

const IndexPage = (props: IndexPageProps) => {
  const recipes = props.data.allNodeRecipe.edges.map(recipe => recipe.node)
  return (
    <Layout>
      <ImageSlider
        images={recipes.map(
          recipe => recipe.relationships.field_image.localFile.childImageSharp
        )}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allNodeRecipe(sort: { fields: [created] }) {
      edges {
        node {
          title
          fields {
            slug
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 740, maxHeight: 555) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
