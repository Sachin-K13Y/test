import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Teams from './pages/Teams';
import Events from './pages/Events';
import './pages/fontawesome'



const App = () => {
    return (
        <Router>
            <Header />
    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/events" element={<Events />} />
           
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
