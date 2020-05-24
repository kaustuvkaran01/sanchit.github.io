import React from 'react';
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Card } from "react-bootstrap";
import { DiGithubFull } from "react-icons/di";

function TabContentFour() {
  return (
    <MainContainer>
      <div className="tab-content">
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>PongAI</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Atari game(pong) playing AI based on DQN agent implemented using
              open ai gym and pytorch.
            </Card.Text>
            <Card.Link href="#"><DiGithubFull size="70" /></Card.Link>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </div>
    </MainContainer>
  );
}

export default TabContentFour;

const MainContainer = styled.div`
  .tab-content {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    margin: 1rem;
    padding: 1rem;
    border-radius: 50px;
    font-family: Ubuntu;

    //This is the grow effect
    -mos-osx-font-smoothing: grayscale;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;