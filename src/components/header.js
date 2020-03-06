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
  font-family: 'Crimson Text';
`

const HeaderLinks = styled.div`
  display: 'flex',
  flex-direction: 'row';
  font-family: 'Crimson Text';
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
      <HeaderTitle>
        <Link to="/" style={{ textDecoration: 'none', color: '#2A2D34' }}>
          {siteTitle}
        </Link>
      </HeaderTitle>
      <HeaderLinks>
        <Link to="/musicjournal/" style={{ textDecoration: 'none', color: '#2A2D34', fontFamily: 'Crimson Text' }}>Music Journal</Link>
        <Link to="/" style={{ textDecoration: 'none', color: '#2A2D34', marginLeft: 18, fontFamily: 'Crimson Text' }}>About</Link>
      </HeaderLinks>
  </HeaderContainer>
)

export default Header