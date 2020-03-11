import React, {useState} from 'react';
import { Collapse, Form, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownItem, FormGroup, Button, Input } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import { GiShinyApple, GiCarrot, GiBookmarklet, GiLightBulb } from 'react-icons/gi';
import { FaUserFriends, FaQuestion, FaSearch, FaRegBell } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import './Header.css';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light className="head">
            <NavbarBrand href="/" className="mr-auto titre">AgriCook</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2 menubtn" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
                <h5>Menu</h5>
            </NavItem>
            <NavItem>
                <DropdownItem divider/>
                <Button className="mb-2 test" outline>Vendre</Button>
            </NavItem>
            <NavItem>
                <Button outline className="test">Connexion/Inscription</Button>
                <NavLink href="/">Comment ça marche ?</NavLink>
                <DropdownItem divider/>
                <p>Parcourir</p>
                <NavLink href="/"><GiShinyApple/> Fruits</NavLink>
                <NavLink href="/"><GiCarrot/> Légumes</NavLink>
                <NavLink href="/"><GiBookmarklet/> Recettes</NavLink>
                <NavLink href="/"><FaUserFriends/> Membres</NavLink>
                <DropdownItem divider/>
                <p>A propos</p>
                <NavLink href="/"><GiLightBulb/> Aide</NavLink>
                <NavLink href="/"><IoIosMail/> Contact</NavLink>
                <NavLink href="/"><FaQuestion/> Qui sommes nous ?</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>
      <Navbar className="head">
          <Form inline>
            <FormGroup>
                <Input type="select" className="mr-2">
                    <option>Produits</option>
                    <option>Recettes</option>
                    <option>Membres</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Rechercher"/>
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                            <FaSearch/>
                        </button>
                    </div>
                </div>
            </FormGroup>
          </Form>
      </Navbar>
    </div>
  );
}

export default Header;