import React from "react"
import { graphql } from "gatsby"
import { Container } from "../components/Container"
import { SEO } from "../components/Seo"
import { PostContainer } from "../components/PostContainer"
import { Bio } from "../components/Bio"

export default function Home({ data }) {
  const posts = data.allMdx.edges
  if (posts.length === 0) {
    return (
      <Container>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "src/posts" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Container>
    )
  }
  return (
    <Container>
      <SEO title="Gatsby Starter Blog" />
      <Bio />

      {posts.map(post => (
        <PostContainer
          key={post.node.id}
          date={post.node.frontmatter.date}
          title={post.node.frontmatter.title}
          slug={post.node.frontmatter.slug}
          excerpt={post.node.frontmatter.excerpt}
        />
      ))}
    </Container>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
          }
          id
        }
      }
    }
  }
`
