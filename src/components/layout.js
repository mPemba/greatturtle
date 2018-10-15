import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import './layout.css'


const LayoutContainer = styled.div`
  background-color: #F2F4F2;
  font-family: 'Crimson Text'
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
  overflow: hidden;
  position: relative;
`

const Footer = styled.div`
  padding: 30px;
  background-color: #CED0CE;
  position: relative;
  bottom: 0;
  width: 100%;
  clear: both;
  font-family: 'Crimson Text'
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutContainer>
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
        </LayoutContainer>
        <Footer>
          <p>
            Boise, Idaho
          </p>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
