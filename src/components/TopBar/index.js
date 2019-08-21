import React from 'react';
import {
  Navbar,
  Button,
  Dropdown,
  Image
} from 'react-bootstrap';

// Styles
import '../../styles/TopBar.css';

const TopBar = props => (
  <Navbar className="justify-content-between top-bar-nav" bg="light" expand="lg">
    <div>
      <Button className="toogle-menu-button" onClick={props.toogleSideBar}>X</Button>
    </div>
    <div className="topbar-user">
      <Dropdown>
        <Dropdown.Toggle variant="info" id="user-top-menu">
          <Image className="user-photo" src="/statics/images/CROP_SAHM.jpg" roundedCircle />
          Alex Mejicanos
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Perfil</Dropdown.Item>
          <Dropdown.Item>Salir</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </Navbar>
);

export default TopBar;
