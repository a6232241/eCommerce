import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

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
          <NavDropdown.Item href='/apparel/coat'>上衣</NavDropdown.Item>
          <NavDropdown.Item href='/apparel/pants'>褲子</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='/apparel/accessories'>配件</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default Menu
