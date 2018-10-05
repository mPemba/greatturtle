import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  padding: 76px 30px;
  background-color: #CED0CE;
`

const HeaderTitle = styled.h1`
  color: #2A2D34;
  text-decoration: 'none';
  font-family: 'DankMono';
`

const HeaderLinks = styled.div`
  display: 'flex',
  flex-direction: 'row';
  font-family: 'DankMono';
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
      <HeaderTitle>
        <Link to="/" style={{ textDecoration: 'none', color: '#2A2D34' }}>
          {siteTitle}
        </Link>
      </HeaderTitle>
      <HeaderLinks>
        <Link to="/musicjournal/" style={{ textDecoration: 'none', color: '#2A2D34', fontFamily: 'DankMonoItalic' }}>Music Journal</Link>
        <Link to="/" style={{ textDecoration: 'none', color: '#2A2D34', marginLeft: 18, fontFamily: 'DankMonoItalic' }}>About</Link>
      </HeaderLinks>
  </HeaderContainer>
)

export default Header