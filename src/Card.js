import React from 'react';
import {Col} from 'react-bootstrap';

function Card(props){
    return(
        <Col>
            {/* <img src={process.env.PUBLIC_URL+'/shoes3.jpeg'} width="80%" /> */}
            <img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width="80%" /> 
            {/* props로 i 전송받음 */}
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </Col>
    )
}

export default Card;