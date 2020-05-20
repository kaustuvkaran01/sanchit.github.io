import React from 'react';
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Card } from "react-bootstrap";

function TabContentFour() {
  return (
    <MainContainer>
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link>&nbsp;&nbsp;
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
            <Card.Link href="#">Card Link</Card.Link> &nbsp;&nbsp;
            <Card.Link href="#">Another Link</Card.Link>
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
    }
`;