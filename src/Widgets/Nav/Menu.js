import React from "react";

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>Vendre</li>
            <li onClick={close}>Connexion/Inscription</li>
            <li onClick={close}>Comment ça marche?</li>
            <li onClick={close}>Parcourir</li>
            <li onClick={close}>🍎Fruits</li>
            <li onClick={close}>🥕Légumes</li>
            <li onClick={close}>🥘Recettes</li>
            <li onClick={close}>👩🏻Membres👱🏽</li>
            <li onClick={close}>👓À propos</li>
            <li onClick={close}>🤷🏻‍♂️Aide</li>
            <li onClick={close}>☎️Contact📧</li>
            <li onClick={close}>👨🏼‍🎨Qui sommes-nous?</li>
        </ul>
    </div>
);