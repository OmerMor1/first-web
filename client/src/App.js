import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Icon from './Components/Icon/icon';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Services from './Pages/Services/services';
import emailjs from 'emailjs-com';

function App() {
  emailjs.init('37xiDGS3H-A-ucKOu');
const name="/first-web";

    return (
      <div className="App">
        <Router basename={name.PUBLIC_URL}>
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Icon />
          <Footer />
        </Router>
      </div>
    );
}

export default App;
