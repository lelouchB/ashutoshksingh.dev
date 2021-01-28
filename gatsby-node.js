// gatsby-node.js
const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(post => {
    const slug = post.node.frontmatter.slug

    createPage({
      path: `posts/${slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: { id: post.node.id },
    })
  })
}
