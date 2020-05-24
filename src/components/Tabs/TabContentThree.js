import React from 'react';
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
// import { Button } from "./Button";
import { Icon } from "react-icons";
import { generateMedia } from "styled-media-query";
import { Card } from "react-bootstrap";
function TabContentThree() {
  return (
    <TabContainer>
      {/* Tab Top Content */}
      <div className="tab-content">
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Self Driving Car</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Implementing using simulation tools, deep learning, and other
              computer vision techniques.(Ongoing Lane finding, traffic sign
              classifier and steering angle prediction implemented)
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <br />
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Line Follower using PID</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Line follower based on PID algorithm to improve accuracy.
              Participated in saturnalia with this bot and reached finals.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <br />
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Seed sowing bot</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Seed sowing bot model using arduino and ir sensors. Used servo
              motors for making seed sowing mechanism and used ir sensors to
              detect pits.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <br />
      </div>
    </TabContainer>
  );
}
export default TabContentThree;
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop:'1000px'
})

const TabContainer = styled.div`

  .tab-content{
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    margin:1rem;
    padding: 1rem;
    border-radius: 50px;
    font-family: Ubuntu;
  }
`;
