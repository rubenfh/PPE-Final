import './Photo_profil.css';
import React from 'react';
import photo from './profil_picture.png'; // Tell webpack this JS file uses this image

console.log(photo); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={photo} alt="Logo" />;
}
export default Header;