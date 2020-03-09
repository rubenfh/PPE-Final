import React from 'react';
import Nav from "../Nav/Nav";
import "./Homepage.css";
import { Card, Button, CardTitle, CardText, Row, Col, CardImg  } from 'reactstrap';


const Homepage = (props) => {
 // <link rel="stylesheet" href="style.css" />
  return (
    
    <div class="fixed-bottom">
      <Row>
      <center class="col-12">
    <div><Button color="primary">Commencer à vendre</Button></div>
    </center>
    </Row>
    <br />
    <br />
    <div>
    <Row>
      <Col sm="6">
      <Card className="text-center">
        <CardTitle className="text-center">Pseudo vendeur</CardTitle>
      <CardImg top width="100%" src="./poivron.png" alt="Card image cap" />
      <Card body>
          <CardTitle >Poivron</CardTitle>
          <CardText>Quantité : 10</CardText>
          <Button color="primary">Acheter</Button>
          </Card>
        </Card>
      </Col>
      <Col sm="6">
      <Card className="text-center">
        <CardTitle className="text-center">Pseudo Vendeur</CardTitle>
      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <Card body>
          <CardTitle className="text-center">Olives</CardTitle>
          <CardText className="text-center">Quantité: 100g</CardText>
          <Button color="primary">Acheter</Button>
        </Card>
        </Card>
      </Col>
    </Row>
    </div>
    </div>

    );
  };

export default Homepage;