import React, { useState, useEffect } from 'react'; // Importeer useState en useEffect
import '../styles/Home.css';
import profielfoot from '../img/profielfoot.jpg'; // Importeer de afbeelding
import scrollGif from '../img/scroll_down.gif';
import video from '../img/video3.mp4';

function Home() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up de event listener bij unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="home">
            <div className="container">
                <video autoPlay loop muted className="background-video">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="corner-marker tl"></div>
                <div className="corner-marker tr"></div>
                <div className="corner-marker bl"></div>
                <div className="corner-marker br"></div>
                <div className="text">
                    <h1 className="home-title">Jari Knoop</h1>
                    <p>
                        I am a young and enthusiastic software developer in training with 3 years of work experience. I enjoy creating new applications and diving into the latest technologies.
                    </p>
                </div>
                <div className="image">
                    <div className="box"></div>
                    <img src={profielfoot} alt="Profiel foto" />
                </div>
            </div>
            <div className="scroll-animation">
                {isVisible && <img src={scrollGif} alt="Scroll animatie" style={{ width: '100px', height: '100px', margin: '0 auto' }} />}
            </div>
        </section>
    );
}

export default Home;
