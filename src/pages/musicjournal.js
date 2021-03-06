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
  font-family: 'Crimson Text';
  font-size: 32px;
  line-height: 36px;
  margin: 70px 0;
`

const EntryContainer = styled.div`
  max-width: 600px;
`

const EntryTitle = styled.h3`
  font-family: Crimson Text;
  line-height: 30px;
  margin-bottom: 10px;
`

const EntrySubText = styled.div`
  font-size: 12px;
  font-family: Crimson Text;
  line-height: 18px;
  color: rgba(0, 0, 0, .54);
`

const Entry = styled.p`
  font-size: 14px;
  font-family: Crimson Text;
  line-height: 20px;
  margin-bottom: 30px;
`

const EntryLink = styled.a`
  color: #466365;
  font-weight: bold;
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
            <EntryTitle>Live at Celebration Video</EntryTitle>
            <EntrySubText>fifth entry</EntrySubText>
            <EntrySubText>December 13th, 2018</EntrySubText>
            <Entry>
                The year is almost over and we have attended the final events for the NCA's 25 Year Anniversary. It's been an honor
                to be a part of this. With limited resources we captured as much of the Oct. 12th show as we could. 
                This video is a collection of that material to show what the event was like. Elton displayed footage of the NCA on 
                the wall and we improvised alongside it.
            </Entry>
            <div className="iframe-container">
            <iframe title="Live at Celebration Video" width="560" height="315" src="https://www.youtube.com/embed/vvpJFFNdtMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </EntryContainer>

        <Spacer></Spacer>

        <EntryContainer>
            <EntryTitle>VIII of Cups</EntryTitle>
            <EntrySubText>fourth entry</EntrySubText>
            <EntrySubText>November 5th, 2018</EntrySubText>
            <Entry>
                The last thing we played on the 5th. I had left my Zoom recorder on from the week before, so the batteries were out and the SD card was full.
                I still haven't looked at how big that last file was, probably over 20GB. Without this we could only pick up what was coming out of the mixer.
                I took two monitor outs through the interface and this is what we got. We were both playing bass this night. 
                Casey on the upright and I was playing electric with a big swell reverb. Both instruments through the Little Deformer.
            </Entry>
            <div className="iframe-container">
              <iframe title="VII of cups" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/528189021&color=%234f6365&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        </EntryContainer>

        <Spacer></Spacer>

        <EntryContainer>
            <EntryTitle>Flight Path</EntryTitle>
            <EntrySubText>third entry</EntrySubText>
            <EntrySubText>October 29th, 2018</EntrySubText>
            <Entry>
                It's complete. Here is the video album we made for the NCA. You can watch individual tracks or the complete album on the BLM's
                Youtube channel. All the video work was done by <EntryLink href="http://eltondeleon.com/" target="_blank" without rel="noopener noreferrer">Elton de León Arteaga.
                </EntryLink> Thank you to everyone who helped us put this thing together. It has been a great adventure.
            </Entry>
            <div className="iframe-container">
              <iframe title="Great Turtle: NCA Video Album" width="560" height="315" src="https://www.youtube.com/embed/4q4qGT1o4o4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </EntryContainer>

        <Spacer></Spacer>

        <EntryContainer>
            <EntryTitle>Live at Celebration Park</EntryTitle>
            <EntrySubText>second entry</EntrySubText>
            <EntrySubText>October 22nd, 2018</EntrySubText>
            <Entry>
                On October 12th, 2018 we performed in the museum at Celebration Park. The NCA had all the artist's work on display and then at the end of the night we got to improvise.
                First we watched Initial Point, and then we played a live soundtrack to a version of the film that Elton put together for this show. 
                The audio recording of the performance is now available on Soundcloud.
                This was a fun night for us, and we're super grateful to everyone who helped make this event happen.
            </Entry>
            <iframe title="Great Turtle Celebration Park Show Audio" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/518217141&color=%234f4d4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </EntryContainer>

        <Spacer></Spacer>

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
            <iframe title="Great Turtle NCA Soundcloud" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/617034336&color=%23466365&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            
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