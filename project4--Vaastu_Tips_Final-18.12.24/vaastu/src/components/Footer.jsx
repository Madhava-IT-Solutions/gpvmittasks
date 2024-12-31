
// components/Footer.js
import {React,useState} from 'react';
import Thanks from './Thanks'


const Footer = () => { 
  return (      
    <footer>
      <p><strong style={{color:"darkblue"}}>Disclaimer: </strong> These tips are intended for general information to enhance your house construction journey. You may consult a Vaastu expert for personalized Vaastu suggestions.</p>
      <Thanks/>
      <p>&copy; 2024 SSV constructions. All rights reserved.</p>
    </footer>

  );
};

export default Footer;
