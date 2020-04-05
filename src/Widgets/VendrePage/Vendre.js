import './Vendre.css';
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons';

const Vendre = (props) => {
    return (
        <div>
            <div id="title">Vends ton article</div>

            <div className='buttons fadein'>
                <div className='button'>
                    <label htmlFor='multi'>
                        <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
                    </label>
                </div>
                <input type='file' id='multi' onChange={props.onChange} multiple />
                <div>Ajoute une photo</div>
            </div>
            <form>
                <label>Nom de ton produit : 
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

export default Vendre;