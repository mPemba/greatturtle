import React from 'react'
import styled from "styled-components"
import Layout from '../components/layout'

import '../components/layout.css'


const MainTitle = styled.h2`
  color: #2A2D34;
  text-decoration: 'none';
  font-family: 'DankMono';
  font-size: 32px;
  line-height: 36px;
  margin: 40px 0;
`

const EntryContainer = styled.div`
  max-width: 600px;
`

const EntryTitle = styled.h3`
  font-family: DankMono;
  line-height: 30px;
`

const EntryDate = styled.div`
  font-size: 12px;
  font-family: DankMonoItalic;
  line-height: 18px;
  color: rgba(0, 0, 0, .54);
`

const Entry = styled.p`
  font-size: 14px;
  font-family: DankMono;
  line-height: 20px;
`


const MusicJournal = () => (
  <Layout>
      <MainTitle>Music Journal</MainTitle>
      <hr></hr>
        <EntryContainer>
            <EntryTitle>First Post!</EntryTitle>
            <EntryDate>Friday October 5th, 2018</EntryDate>
            <Entry>We spent this summer of 2018 working on this album for the Morley Nelson Snake River Birds of Prey National Conservation Area's 25 Year Anniversary: Artist-In-Residence Project.</Entry>
            <Entry>We made these songs and we have a video pair for each one. The film will be here soon and you can enjoy the music now. Thanks for listening.</Entry>
            <iframe title="Great Turtle Soundcloud" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/617034336&color=%23466365&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </EntryContainer>
      <hr></hr>
  </Layout>
)

export default MusicJournal