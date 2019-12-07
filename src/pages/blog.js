import React from 'react'
import { graphql } from 'gatsby'

import Layout from '@layouts/layout'
import SEO from '@components/seo'

import PostLink from '@components/post-link'

const BlogPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    console.log(edges);

    const posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            <div>{posts}</div>
        </Layout>
    )
}

export default BlogPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`
