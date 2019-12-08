/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('src/templates/blog.js')
    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.')
        return
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {
                next: index === 0 ? null : posts[index - 1].node,
                prev: index === (posts.length -1) ? null : posts[index + 1].node
            }
        })
    })
}
