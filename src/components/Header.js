import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Header.css';

function Header() {

    const [navbar, setNavbar] = React.useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <header>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About Me</Link></li>
                    <li><Link to="projects">Projects</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;