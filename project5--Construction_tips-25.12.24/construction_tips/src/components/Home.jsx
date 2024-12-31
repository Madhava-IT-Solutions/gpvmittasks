
// components/Home.js
import React from 'react';
import { Link } from "react-router";

import './Home.css'

const Home = () => {
    return (
      <div className='home'>
        <div>
        <h2  style={{color:"#fcc03d", fontSize:"30px" }}>Welcome to SSV Construction Tips</h2>
        <p>Explore our posts for insightful Construction tips to improve your house construction.</p>
        </div>
        <Link to={`/category/Economical`} >
              <button className='StartBtn' >Get Started</button>
        </Link>
      </div>
    );
  };
  
  export default Home;