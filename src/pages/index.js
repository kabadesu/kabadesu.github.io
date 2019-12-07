import React from 'react'
import { Link, graphql } from 'gatsby'

import Img from 'gatsby-image'

import Layout from '@layouts/layout'
import SEO from '@components/seo'

const IndexPage = props => (
    <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>
            <Link to="/blog/">Blog</Link>
        </p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Img fluid={props.data.placeholderImage.childImageSharp.fluid} />
        </div>
    </Layout>
)

export default IndexPage

export const PageQuery = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`