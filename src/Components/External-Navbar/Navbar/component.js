import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

import { NavBarItem } from '../NavbarItem/component';


class NavBar extends Component {
    render(): Node {
        return (
            <Nav
                {...this.props}
            >
                {this.props.children}
            </Nav>
        );
    }
}

export default NavBar;
