import './Panier.css';
import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, CardGroup, CardBody } from 'reactstrap';
import img from './img/panierosier.png';

const Test = (props) => {

    return (
        <div>
            <div id="title">Récapitulatif de mon panier</div>

            <Row>
                <Col sm={{ size: 5, offset: 1 }}>
                <section id="panier" class="row">
						<article class="col-lg-2 col-md-3 col-6">
							<figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
						<article class="col-lg-2 col-md-3 col-6">
                            <figure>
								<img src={img} />
								<figcaption>Titre</figcaption>
							</figure>
							<div>Prix: €</div>
							<Button className="bouton">Supprimer</Button>
						</article>
					</section>                
                </Col>

                <Col sm={{size: 3, offset: 1}}>
                    <Card body id='pay'>
                        <CardTitle>TOTAL</CardTitle>
                        <Button className="bouton2">Valider mon panier</Button>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Test;