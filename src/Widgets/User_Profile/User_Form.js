import React from 'react';
import {Form} from 'react-bootstrap';


const UserForm = () => (
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" /></Form.Group>

    <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="********" /></Form.Group>
</Form>


);
export default UserForm;