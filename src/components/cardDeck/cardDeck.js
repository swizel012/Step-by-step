import React from 'react';
import { CardDeck,Card } from 'react-bootstrap';
import classes from './cardDeck.module.css';
const Deck =(props)=>
{
    return(
          <div className={classes.styles}>
             <CardDeck > 
            <Card>
                <Card.Link href="#">
                <Card.Img variant="top" src="holder.js/100px160" />
                </Card.Link>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
            <Card.Link href="#">
                <Card.Img variant="top" src="holder.js/100px160" />
                </Card.Link>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
            <Card.Link href="#">
                <Card.Img variant="top" src="holder.js/100px160" />
                </Card.Link>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardDeck>
        </div>
    )
}
export default Deck;