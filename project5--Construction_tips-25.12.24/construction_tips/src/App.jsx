
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Footer from './components/Footer';
import FeedbackForm from './components/FeedbackForm';
import './App.css'



function App() {
 
  return (
    <Router >
      <div className='router'>
        <h1 className='h1'>Construction <span className='span'>Tips</span> </h1>
        <p style={{color: "darkgreen"}}>
        For Economical, Long lasting & Efficient Construction</p>
        <div className="blog">
        <Navbar />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryName" element={<Blog />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App