import React from 'react';
import './Connexion.css';

const Connexion = props => (
    <div className="box">
        <div className="connexion">
            <h3 className="b1">Connexion</h3>
            <form>
                <h4>Login:</h4>
                <input
                    type='text'
                    name='username'
                />
                <h4>Password:</h4>
                <input
                    type='text'
                    name='age'
                />
            </form>
        </div>
        <br></br>
        <div className="inscription">
            <h3 className="b1">Inscription</h3>
            <form>
                <h4>Email:</h4>
                <input
                    type='text'
                    name='age'
                />
                <h4>Login:</h4>
                <input
                    type='text'
                    name='username'
                />
                <h4>Password:</h4>
                <input
                    type='text'
                    name='age'
                />
                <h4>Confirm Password:</h4>
                <input
                    type='text'
                    name='age'
                />
            </form>
        </div>
    </div>
);

export default Connexion;