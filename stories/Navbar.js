import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import NavBar from './../src/Components/NavBar/Navbar/component';
import NavBarItem from './../src/Components/NavBar/NavbarItem/component';

storiesOf('NavBar', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => (
        <NavBar>
            <NavBarItem label={'link1'} href={'#'} />
            <NavBarItem label={'link2'} href={'#'} />
            <NavBarItem label={'link3'} href={'#'} />
        </NavBar>
    ));