import './App.css';
import React from 'react';
import { Button, Card, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/Name';
import Descrption from './components/Descrption';
import Image from './components/Image';
import Price from './components/Price';
import logo from './images/logo192.png';




let myName= "";


function App() {
  return (
    <div>

      <div className="App">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              Stays
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              Loyalty program
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" disabled>
              NavLink  content
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="More" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Activities</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Events</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Meetings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      
        <Card style={{ width: '18rem' }}>
          <Image />
          <Card.Body>
            <Card.Title><Name /></Card.Title>
            <Card.Text>

              <Descrption />

            </Card.Text>

            <Price />
            <Button variant="primary">Welcome</Button>
          </Card.Body>
        </Card>
       {myName ? <h1>Hello {myName}!</h1> : <h1> Hello, there!</h1>}
        {myName && <img src={logo}/>}
      </div >
    </div >
  )
}

export default App;