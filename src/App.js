import './App.css';
import {Container, Row, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Card from './Card';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './detail.js';


function App() {

  let [shoes] = useState(data) //데이터를 불러와서 shoes라는 state에 넣어줌
  // console.log(shoes[0])
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MY-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}

            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>Detail</Nav.Link>  */}
            {/* useNavigae를 이용하여 뒤로가기 */}
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            {/* useNavigae를 이용하여 부드러운 이동 */}
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

    {/* <Link to="/">home</Link>
    <Link to="/detail">detail</Link> */}
    {/* 새로고침 없는 페이지이동 */}

    <Routes>
        <Route
        path="/" 
        element={
        <Main shoes={shoes}></Main>
        }>

        </Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/about" element={<div>about</div>}></Route>
        <Route path="*" element={<div>404페이지</div>}></Route>
        {/* 없는 페이지로 접속시 404페이지 노출 */}

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>어바웃</div>}></Route>
        </Route>
      {/* Outlet을 이용한 페이지 분기 */}

      </Routes>

      
    

    </div>
  );
}

function About(){
  return(
    <div>
      어바웃페이지
      <Outlet></Outlet>
      {/* Outlet을 사용하려면 꼭 넣어줘야 함 */}
    </div>
  )
}

function Main(props){
  return(
    <>
    <div className="main-bg"></div>
    <Container>
      <Row>
          {/* <Card shoes={shoes[0]} i={1}></Card>  */}
          {/* <Card shoes={shoes[1]} i={2}></Card> */}
          {/* <Card shoes={shoes[2]} i={3}></Card> */}

          {/*props 전송, shoes와 i 2개의 props 전송*/}

          {
            props.shoes.map((a, i)=>{
              return(
                <Card shoes={props.shoes[i]} i={i+1}></Card>
              )
            })
          }
      </Row>
    </Container>
    </>
  )
}

export default App;
