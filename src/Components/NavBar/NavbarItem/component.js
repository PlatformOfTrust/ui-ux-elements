import React, { Component } from 'react';
import Links from '../../Link/component';
import Nav from 'react-bootstrap/Nav';

class NavBarItem extends Component<> {
    render(): Node {
        return (
            <Nav.Item>
                <Links {...this.props} />
            </Nav.Item>
        );
    }
}

export default NavBarItem;