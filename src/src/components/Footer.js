import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
       <Row>
    <Col className='ft center py-1 bg bg-dark'>
    <div className="txt">
    <h3 class="h">Download App</h3>
    
    <p>Find everything for buying,selling&
      renting property in our new finder app
    </p>
    </div>
    
    </Col>
    </Row>
    <Row>
    <Col className='copy text center py-1'>
    2021 Bottlecap-Buy sell or Rent.All rights reserved
    </Col>
    </Row>
    </div>
      
  )
}

export default Footer