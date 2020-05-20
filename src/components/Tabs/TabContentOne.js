import React from 'react';
// import img1 from "../images/tab-1-pic.png";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Card } from "react-bootstrap";

export default function TabContentOne() {
  return (
    <TabContentContainer>
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
    </TabContentContainer>
  );
}

// Media Query
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px',

})

//Main Content Container
const TabContentContainer = styled.div`
//  background: var(--main-deep-dark);

  // .title {
  //    margin-top: 2rem;
  //    ${customMedia.lessThan('smDesktop')`
  //     font-size: 1.5rem;
  //     line-height: 1;
  //    `}
  // }


  // .container {
  //   margin: 0 10%;
  // }

  // .tab-content {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-gap: 2rem;
  //   font-size: 2rem;
  //   align-items: center;
  //   padding: 2.5rem;
  //   ${customMedia.lessThan('tablet')`
  //       grid-template-columns: 100%;
  //       text-align: center;
  //       padding-left: 0;
  //       padding-right: 0;
  //    `}
  // }

  .tab-content {
    display: flex;
    flex-wrap: wrap;
  }

  .card{
    margin: 1rem;
    padding: 1rem;
    border-radius: 50px;
    font-family: Ubuntu;
  }
`;