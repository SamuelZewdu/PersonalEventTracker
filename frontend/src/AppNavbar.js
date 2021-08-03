import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle =  this.toggle.bind(this)
    }

    toggle() {
        this.setState ({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color = "success" dark expnad ="md">
            <NavbarBrand tag = {Link} to = "/">Home</NavbarBrand>
            <div Navbar color="faded" light expand="md">
                <NavbarToggler onClick = {this.toggle}/>
            </div>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className ="m1-auto" navbar>
                    <NavItem>
                        <NavLink href = "https://github.com/SamuelZewdu/fullstack-event-tracker">Github</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>;
    }
}