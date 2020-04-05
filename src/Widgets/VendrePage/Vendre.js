import './Vendre.css';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages} from '@fortawesome/free-solid-svg-icons';
import { Label, Input, FormGroup, Form, Button } from 'reactstrap';

const Vendre = (props) => {
    
    return (
        <div>
            <div id="title">Vends ton article</div>

            <Form>
                <div className='buttons fadein'>
                    <div className='button'>
                        <Label htmlFor='multi'>
                            <FontAwesomeIcon icon={faImages} color='#71da71' size='10x' />
                        </Label>
                    </div>
                    <Label>Ajoute une photo <Input type='file' id='multi' onChange={props.onChange} multiple /></Label>
                </div>
                <FormGroup>
                    <Input type="text" name="name" value="Nom de ton produit. Ex: Pomme Golden" />
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" name="description" value="Description de ton produit. Ex: Cueillies le 12/07/2019"></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="race" value="Race. Ex: Golden" />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <Label>Présence de pesticides</Label>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '} Oui
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '} Non
                        </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Input type="select">
                        <option value="Légumes">Légumes</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Fruits à coque">Fruits à coque</option>
                        <option value="Champignons">Champignons</option>
                        <option value="Graines">Graines</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '} Je suis intéressé(e) par les échanges
                    </Label>
                </FormGroup>
                <Button id="submit" type="submit">Valider</Button>
            </Form>
        </div>
    );
}

export default Vendre;