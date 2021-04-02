import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Cards.scss";


function Cards() {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/6JBX9Wx/download.jpg" className="cardImage" />
                    <Card.Body>
                        <Card.Title>Pluralsight’s Quick Start to JavaScript</Card.Title>
                        <Card.Text>
                            Learn how to write the programming language from scratch, so you can start creating code of your own.
      </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/JQdNDhd/download-1.jpg" className="cardImage" />
                    <Card.Body>
                        <Card.Title>JavaScript Objects and Prototypes</Card.Title>
                        <Card.Text>
                            In-depth, behind-the-scenes details of creating JavaScript objects, manipulating properties, and using prototypal inheritance.
      </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/6BgRwfx/images.jpg" className="cardImage" />
                    <Card.Body>
                        <Card.Title>Advanced Techniques in JavaScript and jQuery</Card.Title>
                        <Card.Text>
                            Take your JavaScript functions to the next level. Explore events and learn about jQuery Deferred objects.
      </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Cards;