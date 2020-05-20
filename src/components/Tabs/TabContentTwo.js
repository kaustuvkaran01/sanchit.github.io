import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
// import { Button } from "./Button";
import styled from "styled-components";
// import img1 from "../images/tab-macbook.png";
// import img2 from "../images/tab-tablet.png";
// import img3 from "../images/tab-tv.png";
import { generateMedia } from "styled-media-query";
import { Card } from "react-bootstrap";
function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
      <Card className="card" style={{ width: "18rem", border:"solid",  }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border:"solid",  }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border:"solid",  }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border:"solid",  }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </TabContainer>
  );
}
export default TabContentTwo;

//Main Media query
const customMedia = generateMedia({
  smDesktop:'960px',
  tablet:'1440px'
})


//Main Tab Component Container


const TabContainer = styled.div`
  // background: var(--main-deep-dark);

  // .tab-content {
  //   margin: 0 15%;
  // }

  // .tab-top-content {
  //   display: grid;
  //   grid-template-columns: repeat(12, 1fr);
  //   justify-content: center;
  //   align-items: center;
  //   padding: 2.5rem 0;
  //   ${customMedia.lessThan("smDesktop")`
  //     grid-template-columns:repeat(2, 1fr);
  //    `}
  //    ${customMedia.lessThan('tablet')`
  //    grid-template-columns:1fr;
  //    text-align: center;
  //    row-gap: 1.5rem;
  //    `}
  // }

  // span {
  //   grid-column: 1 / 8;
  //   ${customMedia.lessThan('tablet')`
  //     grid-column: 1 / -1;
  //     font-size:1.5rem;
  //   `}
  // }
  // .btn {
  //   grid-column: 10 / 12;
  //   ${customMedia.lessThan('tablet')`
  //     grid-column: 1 / -1;
  //     margin-left: 30%;
  //     margin-right: 30%;
  //   `}
  // }

  // .tab-bottom-content {
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   grid-gap: 2rem;
  //   text-align: center;
  //   margin-top: 2rem;
  //   ${customMedia.lessThan('tablet')`
  //   grid-template-columns: 1fr;
  // `}
  // }
  // // img {
  // //   width: 100%;
  // //   padding-top: 0.625rem;
    
  // // }

  // h3 {
  //   margin: 0.5rem 0;
  // }

  // p {
  //   color: var(--main-grey);
  // }

  .tab-content {
      display: flex;
      flex-wrap: wrap;
  }

  .card {
    margin: 1rem;
  }
`;