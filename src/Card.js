import React from 'react';
import {Col} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function Card(props){
    return(
        <Col>
            {/* <img src={process.env.PUBLIC_URL+'/shoes3.jpeg'} width="80%" /> */}
            <Link to={"/detail/"+props.shoes.id}><img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width="80%" /> 
            {/* props로 i 전송받음 */}
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
            </Link>
        </Col>
    )
}

export default Card;