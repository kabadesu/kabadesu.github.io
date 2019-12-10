import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, menuLinks }) => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <nav>
                <ul style={{listStyleType: 'none', margin: 0}}>
                    {
                        menuLinks.map(link => (
                            <li key={link.name} style={{display: 'inline-block', marginRight: 20}}>
                                <Link to={link.link} style={{color: 'white', textDecoration: 'none' }}activeClassName="active">{link.name}</Link>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
