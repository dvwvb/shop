import './App.css';
import {Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Card from './Card';


function App() {

  let [shoes] = useState(data) //데이터를 불러와서 shoes라는 state에 넣어줌
  // console.log(shoes[0])

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MY-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="main-bg"></div>

    <Container>
      <Row>
          {/* <Card shoes={shoes[0]} i={1}></Card>  */}
          {/* <Card shoes={shoes[1]} i={2}></Card> */}
          {/* <Card shoes={shoes[2]} i={3}></Card> */}

          {/*props 전송, shoes와 i 2개의 props 전송*/}

          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i+1}></Card>
              )
            })
          }
      </Row>
    </Container>

    </div>
  );
}



export default App;
