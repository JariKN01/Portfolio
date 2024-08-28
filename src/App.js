import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Project from './components/Project';

function App() {
    return (
        <Router>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            </head>
            <Header />
            <main>
                <Home />
                <About />
                <Project />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
