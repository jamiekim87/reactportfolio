import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>My App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link className="link" to="/">About</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link" to="/portfolio">Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link" to="/contact">Contact</Link></NavLink>
              </NavItem>  
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} /> 
        </Switch>
      </div>
    </Router>


  )
}

export default App