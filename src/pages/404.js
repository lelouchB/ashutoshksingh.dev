import React from "react"
import { Container } from "../components/Container"
import { SEO } from "../components/Seo"

const NotFound = () => {
  return (
    <Container>
      <SEO title="404 Not Found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Container>
  )
}

export default NotFound
