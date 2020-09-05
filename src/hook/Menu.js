import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  // constructor(props) {
  //     super(props)
  // }
  return (
    <Navbar expand='md'>
      <Nav
        className='mx-auto '
        style={{ fontSize: '1.5rem', fontWeight: '900' }}
      >
        <Nav.Link href='/'>主頁</Nav.Link>
        <NavDropdown title='類型' id='basic-nav-dropdown'>
          <Link to={{ pathname: `/apparel/coat` }} className='dropdown-item'>
            上衣
          </Link>
          <Link to={{ pathname: `/apparel/pants` }} className='dropdown-item'>
            褲子
          </Link>
          <NavDropdown.Divider />
          <Link
            to={{ pathname: `/apparel/accessories` }}
            className='dropdown-item'
          >
            配件
          </Link>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default Menu
