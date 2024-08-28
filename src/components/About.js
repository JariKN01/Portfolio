import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/About.css';

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="image">
                    <iframe src="https://lottie.host/embed/cb78a3c5-2ee2-4e9b-9e30-aaab3c377cc0/jts0ilQDt7.json"></iframe>
                </div>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        I have extensive experience in both frontend and backend development, with a strong attention to detail. My primary expertise lies in HTML, CSS, JavaScript, SQL and PHP. Additionally, I have built significant experience and developed projects using Python and C#                </p>
                </div>
            </div>
        </section>
    );
}

export default About;