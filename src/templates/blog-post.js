// blog-post.js
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container } from "../components/Container"
import { SEO } from "../components/Seo"
import styled from "styled-components"

const PostWrapper = styled.div`
  padding: 1rem;
  span {
    font-weight: 500;
  }

  p {
    font-size: 1.125 rem;
    font-weight: 400;
    color: #2e2d2f;
    margin: 0.625rem 0;
  }
  img {
    max-width: 640px;
  }

  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    border-left: 3px solid #f36d33;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    max-width: 100%;
    padding: 1em 1.5em;
  }
  a {
    color: blue;
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
  em: {
    font-style: italic;
  }
  del {
    text-decoration: line-through;
  }
  blockquote p {
    font-style: italic;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }
  ul,
  ol {
    color: #2e2d2f;
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
  }
  table,
  th,
  td {
    border: 1px solid #000;
  }
  th {
    font-weight: 700;
  }
  td {
    padding: 0.15rem;
    text-align: left;
  }
  @media print {
    pre {
      overflow-x: auto;
      white-space: pre-wrap;
      white-space: -moz-pre-wrap !important;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
      background: #fff;
    }
  }
`

const TitleWrapper = styled.div`
  text-align: left;
  font-size: 2.1rem;
  font-family: "JetBrains Mono", monospace;
  font-weight: 500;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Title = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>
}

const DateWrapper = styled.span`
  text-align: left;
  font-size: 0.6rem;
  font-weight: 500;
`

const Date = ({ date }) => {
  return <DateWrapper>{date}</DateWrapper>
}
const TimeToReadWrapper = styled.span`
  text-align: left;
  margin-left: 1rem;
  font-size: 0.6rem;
  font-weight: 500;
`

const TimeToRead = ({ timeToRead }) => {
  return (
    <TimeToReadWrapper>
      {timeToRead} {timeToRead > 1 ? `MINUTES` : `MINUTE`} TO READ
    </TimeToReadWrapper>
  )
}

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 480px;
  font-size: 0.6rem;
  font-weight: 600;
  color: #ff0099;
`
const TagWrapper = styled.span`
  padding-right: 0.3rem;
  cursor: pointer;
`

const Tags = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags.map(tag => (
        <TagWrapper key={tag}>{tag}</TagWrapper>
      ))}
    </TagsWrapper>
  )
}

const singlePost = ({ data }) => {
  return (
    <Container>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.excerpt}
      />
      <Title title={data.mdx.frontmatter.title} />
      <Date date={data.mdx.frontmatter.date} />
      <TimeToRead timeToRead={data.mdx.timeToRead} />
      <Tags tags={data.mdx.frontmatter.tags} />
      <PostWrapper>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </PostWrapper>
    </Container>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        excerpt
        slug
        title
        tags
      }
      timeToRead
    }
  }
`
