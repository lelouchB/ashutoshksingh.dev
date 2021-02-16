// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Ashutosh K Singh`,
    author: {
      name: `Ashutosh Kumar Singh`,
    },
    description: `My Portfolio Website`,
    image: `/cover.png`,
    siteUrl: `https://ashutoshksingh.dev/`,
    social: {
      twitter: `@noharashutosh`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: ["Satisfy", "Montserrat", "JetBrains Mono"],
    //     display: "swap",
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            
            allSitePage {
              nodes {
                path
              }
            }
        }
        `,
        resolveSiteUrl: ({ site, allSitePage }) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ashutosh K Singh`,
        short_name: `Ashu`,
        start_url: `/`,
        lang: `en`,
        background_color: `#f7f0eb`,
        theme_color: `purple`,
        display: `standalone`,
        icon: `src/images/myAvatar.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    `/posts/` +
                    edge.node.frontmatter.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    `/posts/` +
                    edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        slug

                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Ashutosh K Singh Blog RSS Feed",
          },
        ],
      },
    },
  ],
}
