import React from 'react';
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import Footer from './Components/Footer/footer.js';
import Header from './Components/Header/header.js';
import Icon from './Components/Icon/icon.js';
import Home from './Pages/Home/home.js';
import About from './Pages/About/about.js';
import Contact from './Pages/Contact/contact.js';
import Services from './Pages/Services/services.js';
import emailjs from 'emailjs-com';
import './app.css';

function App() {
  emailjs.init('37xiDGS3H-A-ucKOu');
  
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Icon />
          <Footer />
        </BrowserRouter>
      </div>
    );
}

export default App;
