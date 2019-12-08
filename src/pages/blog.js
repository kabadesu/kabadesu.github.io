import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "@layouts/layout"
import SEO from "@components/seo"
import PostLink from '@components/post-link'

const Blog = ({
    data: {
        allMarkdownRemark: { edges },
    }
}) => {
    const posts = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
        <Layout>
            <SEO title="Blog" />
            <div>{posts}</div>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default Blog

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
