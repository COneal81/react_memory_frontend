import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export Class NavigationBar Extends Component {
    render () {
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/Categories">Memory Categories</Nav.Link>
                <Nav.Link as={Link} to="/categories/new">Add Category</Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
      
        )
    }
}

export default NavigationBar