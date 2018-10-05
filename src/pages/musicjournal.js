import React from 'react'
import styled from "styled-components"
import Layout from '../components/layout'

import '../components/layout.css'
import initialPoint from "../img/InitialPoint.jpg"
import celRiver from "../img/CelRiver2.jpg"
import fieldRecording1 from "../img/fieldRecording1.jpg"
import CraterRingSmall from "../img/CraterRingSmallPan.jpg"
import HalversonLake1 from "../img/HalversonLake1.jpg"
import sunriseHalverson from "../img/sunriseHalverson3.jpg"
import swanFalls from "../img/swanFalls.jpg"
import BigfootBarField from "../img/BigfootBarFieldRecording.jpg"
import bioPhoto from "../img/bioPhoto.jpg"


const MainTitle = styled.h2`
  color: #2A2D34;
  text-decoration: 'none';
  font-family: 'DankMono';
  font-size: 32px;
  line-height: 36px;
  margin: 70px 0;
`

const EntryContainer = styled.div`
  max-width: 600px;
`

const EntryTitle = styled.h3`
  font-family: DankMono;
  line-height: 30px;
`

const EntrySubText = styled.div`
  font-size: 12px;
  font-family: DankMonoItalic;
  line-height: 18px;
  color: rgba(0, 0, 0, .54);
`

const Entry = styled.p`
  font-size: 14px;
  font-family: DankMono;
  line-height: 20px;
  margin-bottom: 30px;
`

const EntryImage = styled.img`
  margin-bottom: 0px;
`

const Spacer = styled.div`
  width: 100%;
  height: 50px;
  background: none;
`



const MusicJournal = () => (
  <Layout>
      <MainTitle>Music Journal</MainTitle>
      <hr></hr>
        <EntryContainer>
            <EntryTitle>Bird Hymns</EntryTitle>
            <EntrySubText>first entry</EntrySubText>
            <EntrySubText>October 5th, 2018</EntrySubText>
            <Entry>
                We spent this summer of 2018 making a video album for the Morley Nelson Snake River Birds of Prey National Conservation Area's 25 Year Anniversary: Artist-In-Residence Program.
                With the help from our friend Elton de León Arteaga, we took a week off at the end of May to explore and record in the NCA. 
                It was a full week of camping, driving around the NCA, making sure batteries were charged, and gathering film and sound for the project.
                The rest of the summer we used the hours after work to go through the material and create something with it all.
                We attempted to capture the intensity, the history, and the beauty of this wild place. While nothing will replace actually going to Celebration Park and feeling it for yourself, 
                we hope you enjoy this music. Thank you for listening.
            </Entry>
            <iframe title="Great Turtle Soundcloud" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/617034336&color=%23466365&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            
            <Spacer></Spacer>

            <EntryImage src={swanFalls} alt="Swan Falls" />
            <EntrySubText>April 22nd, 2018</EntrySubText>
            <Entry>Swan Falls Lookout</Entry>
            
            <EntryImage src={celRiver} alt="Celebration Park River" />
            <EntrySubText>May 13th, 2018</EntrySubText>
            <Entry>Recording the river at Celebration Park</Entry>

            <EntryImage src={initialPoint} alt="Initial Point Sunrise" />
            <EntrySubText>May 29th, 2018</EntrySubText>
            <Entry>Initial Point sunrise</Entry>

            <EntryImage src={fieldRecording1} alt="Field Recording" />
            <EntrySubText>May 29th, 2018</EntrySubText>
            <Entry>Putting mics in between the bass and the rocks</Entry>
            
            <EntryImage src={sunriseHalverson} alt="Sunrise at Halverson Lake" />
            <EntrySubText>May 30th, 2018</EntrySubText>
            <Entry>Pre dawn chorus</Entry>

            <EntryImage src={HalversonLake1} alt="Halverson Lake" />
            <EntrySubText>May 30th, 2018</EntrySubText>
            <Entry>Halverson Lake</Entry>

            <EntryImage src={bioPhoto} alt="Crater Ring Small Pan" />
            <EntrySubText>May 30th, 2018</EntrySubText>
            <Entry>Casey, Michael and Elton at the rim of the big crater</Entry>

            <EntryImage src={CraterRingSmall} alt="Crater Ring Small Pan" />
            <EntrySubText>May 30th, 2018</EntrySubText>
            <Entry>The small crater (still pretty big) near Mountain Home, ID</Entry>

            <EntryImage src={BigfootBarField} alt="Field Recording at Bigfoot Bar" />
            <EntrySubText>June 1st, 2018</EntrySubText>
            <Entry>Improvising with mics pointed at the cliffs</Entry>
            <EntrySubText>The Great Turtle Loves you</EntrySubText>
        </EntryContainer>
      <hr></hr>
  </Layout>
)

export default MusicJournal