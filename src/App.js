import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <Main>
      <Content>
        <Name>GREAT TURTLE</Name>
        <Colors>
          <div style={{ width: '100%', height: '25px', background: '#8F9491' }}></div>
          <div style={{ width: '100%', height: '25px', background: '#BCA3AC' }}></div>
          <div style={{ width: '100%', height: '25px', background: '#E5CEDC' }}></div>
          <div style={{ width: '100%', height: '25px', background: '#F3EAF4' }}></div>
          <div style={{ width: '100%', height: '25px', background: '#EADDE1' }}></div>
        </Colors>

        <BlockOne>
          <Text>
            The Great Turtle is an electro-acoustic duo formed by Michael Sayer and Casey Dorcey.
          </Text>
          <Text>
            Sound exploration and organic development are at the heart of the music. 
            They pick up the tradition of artists such as Jon Hassell and Terry Riley, blending native/folk like melodies with huge atmospheric world drones. 
            The Great Turtle seeks to take their listeners on the ecstatic journey.
          </Text>
        </BlockOne>

        <BlockTwo>
          <NameLink href="https://greatturtle.bandcamp.com" target="_blank" without rel="noopener noreferrer">BandCamp</NameLink>
          <NameLink href="https://soundcloud.com/user-927298991" target="_blank" without rel="noopener noreferrer">SoundCloud</NameLink>
          <NameLink href="https://www.instagram.com/greatturtlemusic" target="_blank" without rel="noopener noreferrer">Instagram</NameLink>
          <NameLink href="https://twitter.com/musicalcolor" target="_blank" without rel="noopener noreferrer">Twitter</NameLink>
        </BlockTwo>
      </Content>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  padding: 44px;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

const Name = styled.h1`
  font-size: 4em;
  margin: 0px;
  color: #8F9491;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`; 

const Colors = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`; 

const BlockOne = styled.div`
  width: 100%;
  height: 100%;
  background: #8F9491;
  border-radius: 54px;
  margin-top: 44px;
  color: #f5f5f5;
  padding: 44px;
`;

const BlockTwo = styled(BlockOne)`
  background: #BCA3AC;
  margin-top: 22px;
`;

const Text = styled.p`
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
  font-family: 'Georgia', serif;
  margin: 1px;
`;

const NameLink = styled.a`
  color: #466365;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: none;
  underline: none;

  &:hover {
    color: #EADDE1;
  }
`

export default App;
