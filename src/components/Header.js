import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Header.css';

function Header() {
    const [navbar, setNavbar] = React.useState(false);

    // Handle scroll to change navbar state
    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    // Define the animation
    const animationProps = useSpring({
        to: {
            opacity: navbar ? 1 : 0.8,
            transform: navbar ? 'translateY(0)' : 'translateY(-10px)',
            backgroundColor: navbar ? '#333' : 'transparent',
        },
        from: {
            opacity: 0.8,
            transform: 'translateY(-10px)',
            backgroundColor: 'transparent',
        },
        config: {
            tension: 220,
            friction: 20,
        },
    });

    return (
        <header>
            {/* Use animated.nav instead of nav to apply animation */}
            <animated.nav style={animationProps} className={navbar ? 'navbar active' : 'navbar'}>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About Me</Link></li>
                    <li><Link to="projects">Projects</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </animated.nav>
        </header>
    );
}

export default Header;
