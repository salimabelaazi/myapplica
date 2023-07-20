import './App.css';
import React from 'react';
import { Button, Card, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <h1 className='h1'>Our selection of hotels</h1>

        <div className='container'>
          <Card style={{ width: '18rem', hight: '18rem' }}>
            <Card.Img className='img' variant="top" src="https://hotelatoulouse.com/system/images/000/036/944/441685654-big.jpg?1681903384" />
            <Card.Body>
              <Card.Title>Hotel Les Capitouls Toulouse Center - Handwritten Collection</Card.Title>
              <Card.Text>
                Former private mansion,the Hotel Les Capitouls Toulouse Center - Handwritten Collection opens its doors to you.Enter a cozy decor with English accents then fall under the spell of our famous pink bricks before relaxing in our rooms,real chic and modern cocoons.Take a seat under the glass roof of the Wilson bar to work or share a moment of relaxation over a coffee or a cocktail.Enjoy our breakfast and our uniquely flavored room service.
              </Card.Text>
              <Button variant="primary"> Welcome </Button>

            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img className='img1' variant="top" src="https://qtxasset.com/quartz/qcloud1/media/image/Shanghai%20Sheshan%20Oriental.jpg?VersionId=fn_CAjop2Yg3W8HgViCqDXGYColK5iI1" />
            <Card.Body>
              <Card.Title>Hotel Morris Sydney - Handwritten Collection</Card.Title>
              <Card.Text>
                The Morris Hotel offers a personalized experience in an impressive building of Italian architecture.Step into a surprising yet familiar haven within the heritage-listed boutique hotel,a restorative space to escape the hustle and bustle of the surrounding city.The Morris bar is an intimate and pleasant wine bar,with a varied menu.The exciting Italian-inspired menu is fun,dynamic and focuses on fresh,hearty dishes.


              </Card.Text>
              <Button variant="primary">Welcome</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img className='img2' variant="top" src="https://www.ahstatic.com/photos/c132_ho_00_p_1024x768.jpg" />
            <Card.Body>
              <Card.Title>Oru Hub Hotel Tallinn - Handwritten Collection 4 stars</Card.Title>
              <Card.Text>
                The Oru Hub Hotel is conveniently located close to Tallinn's Old Town,very close to Kadriorg Park.Relax in your spacious,bright and ideal room with its neutral interiors.For your work or remote meetings,head to the modern coworking hub.The cohesive beauty of the hotel is the work of an award-winning Estonian design agency.Expect pleasant attentions and attractive spaces everywhere.


              </Card.Text>
              <Button variant="primary">Welcome</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* <Name /> */}



      
      </div>
      )
  


}
export default App;