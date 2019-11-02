import React from 'react';

import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';

import styles from './NavBar.scss';

class NavBar extends React.Component {
    state = {
        links: [
            { path: '/', title: 'Home' },
            { path: '/posts/new', title: 'Add post' },
            { path: '/posts', title: 'Posts' },
            { path: '/contact', title: 'Contact' },
        ],
    }
    render() {
        const { links } = this.state;

        return (
            <nav styles={styles} className='navbar'>
                <Logo />
                <MainMenu links={links} />
            </nav>
        );
    }
}

export default NavBar;