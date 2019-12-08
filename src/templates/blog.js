import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from "@layouts/layout"
import SEO from "@components/seo"

export default function Template({ data, pageContext }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    const {next, prev} = pageContext;

    return (
        <Layout>
            <SEO title={frontmatter.title} />

            <div>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>

            {next && next.frontmatter && (
                <div>
                    <Link to={next.frontmatter.path}>&#8593; {next.frontmatter.title}</Link>
                </div>
            )}

            {prev && prev.frontmatter && (
                <div>
                    <Link to={prev.frontmatter.path}>&#8595; {prev.frontmatter.title}</Link>
                </div>
            )}

            <div>
                <Link to="/blog/">Back</Link>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`
