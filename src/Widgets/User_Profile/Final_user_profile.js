import React from 'react';
//import { Container, Row, Col } from 'reactstrap';
import './Final_user_profile.css';
//import Topnav  from './Widgets/TopNavBar/TopNavBar';
//import Nav from './Widgets/Nav/Nav';
//import axios from 'axios';
import Profile_pic from './Photo_profil';
import Modify_Button from './Button_modify';
import Pseudo from './Pseudo_text_area';
import UserForm from './User_Form';
import UserButtons from './User_button';
import { Col, Row } from 'react-bootstrap';



const final_profile = () => (
    
    <div class = "row justify-content-md-center">
    <div class="col-sm-10">
    <div>
        <Profile_pic/>
        </div>
        <div>
        <Pseudo/>
    </div>
    <div>
    <UserForm/>
    </div>
    <div>
    <Modify_Button/>
    </div>
    </div>
    <div>
    <UserButtons/>
    </div>
    
    </div>
    
);

export default final_profile;

