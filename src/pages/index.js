import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components"
import moon from "../img/MoonVenus.jpeg"

import '../components/layout.css'


const Description = styled.div`
  padding: 2rem;
  font-size: 14px;
  font-family: Crimson Text;
`

const NameLink = styled.a`
  color: #466365;
  font-weight: bold;
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

const SubHeader = styled.h3`
  font-family: Crimson Text;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Description>
      <img src={moon} alt="moon" />
      The Great Turtle is an electro-acoustic duo formed 
      by <NameLink href="https://www.mikeslayer.com" target="_blank" without rel="noopener noreferrer">Michael Sayer</NameLink> (guitar and electronics) 
      and <NameLink href="https://www.caseydorceyexplorations.wordpress.com" target="_blank" without rel="noopener noreferrer">Casey Dorcey</NameLink> (upright bass and electronics). 
      Sound exploration and organic development are at the heart of the music. 
      They pick up the tradition of artists such as Jon Hassell and Terry Riley, blending native/folk like melodies with huge atmospheric world drones. 
      The Great Turtle seeks to take their listeners on the ecstatic journey.
    </Description>
    <hr></hr>
    <Description>
      <ContactContainer>
        <SubHeader>Music and Socials</SubHeader>
        <NameLink href="https://greatturtle.bandcamp.com" target="_blank" without rel="noopener noreferrer">BandCamp</NameLink>
        <NameLink href="https://soundcloud.com/user-927298991" target="_blank" without rel="noopener noreferrer">SoundCloud</NameLink>
        <NameLink href="https://www.instagram.com/greatturtlemusic" target="_blank" without rel="noopener noreferrer">Instagram</NameLink>
        <NameLink href="https://twitter.com/musicalcolor" target="_blank" without rel="noopener noreferrer">Twitter</NameLink>
      </ContactContainer>
    </Description>
  </Layout>
)



export default IndexPage