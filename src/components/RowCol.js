import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";

const RowCol = () => {
  return (
    <div>
        {/* <Row>

           <Col className='c1'  lg={2} md={12}></Col>
           <Col className='c1' lg={4} md={6}>
           <div>
            <h1>facbook</h1>
           </div>
           
           </Col>
           <Col className='c1' lg={4} md={6}>

           <form>
            <input type="text" placeholder='Enter your name' /><br /><br />
            <input type="text" placeholder='Enter your email' /><br /><br />
           </form>
           
           
           </Col>
           <Col className='c1' lg={2} md={12}></Col>
        </Row> */}
        <div className='nav'>

          <h1 className='lw'>Logo</h1>
          <h1 className='lt'>Lo</h1>
          <h1 className='lm'>L</h1>

          <ul className='menu'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>

          <button className='hm'><GiHamburgerMenu />
          </button>
        </div>
    </div>

  )
}

export default RowCol