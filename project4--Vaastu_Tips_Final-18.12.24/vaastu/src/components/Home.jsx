
// components/Home.js
import React from 'react';
import { Link } from "react-router";

import './Home.css'

const Home = () => {
    return (
      <div className='home'>
        <div>
        <h2  style={{color:"#fcc03d", fontSize:"30px" }}>Welcome to SSV Vaastu Tips</h2>
        <p>Explore our posts for insightful Vaastu tips to enhance harmony in your home!</p>

        </div>
        <Link to={`/category/Plot-Selection`} >
              <button className='startBtn' >Get Started  </button>
              </Link>
      </div>
    );
  };
  
  export default Home;