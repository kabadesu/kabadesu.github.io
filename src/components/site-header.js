import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'astroturf'

const Header = styled('header')`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
`
const Inner = styled('div')`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`
const Title = styled('h1')`
    margin: 0;
`
const TitleLink = styled(Link)`
    color: white;
    text-decoration: none;
`
const NavLink = styled(Link)`
    color: white;
    text-decoration: none;

    &.active {
        color: red;
    }
`

const SiteHeader = ({ siteTitle, menuLinks }) => (
    <Header>
        <Inner>
            <Title>
                <TitleLink to="/">
                    {siteTitle}
                </TitleLink>
            </Title>
            <nav>
                <ul style={{listStyleType: 'none', margin: 0}}>
                    {
                        menuLinks.map(link => (
                            <li key={link.name} style={{display: 'inline-block', marginRight: 20}}>
                                <NavLink to={link.link} activeClassName="active">{link.name}</NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </Inner>
    </Header>
)

SiteHeader.propTypes = {
    siteTitle: PropTypes.string,
}

SiteHeader.defaultProps = {
    siteTitle: ``,
}

export default SiteHeader
