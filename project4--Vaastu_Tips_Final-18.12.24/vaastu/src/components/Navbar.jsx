
// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {path} from 'react';

import './Navbar.css';



const categories = [
  { name: "Plot Selection", image: "plot.jpg" },
  { name: "Main Entrance", image:"entrance.webp" },
  { name: "Living Room", image: "livingroom.jpg" },
  { name: "Kitchen", image: "kitchen.jpg" },
  { name: "Master Bedroom", image: "bedroom.jpg" },
  { name: "Cupboard & Locker", image: "cupboard.jpg" },
  { name: "Washroom", image: "bathroom.jpg" },
  { name: "Children’s Room", image: "childrenroom.jpg" },
  { name: "Pooja Room", image: "pujaroom.jpg" },
  { name: "Home Office", image: "homeoffice.jpg" },
  { name: "Staircase", image: "staircase.jpg" },
  { name: "Elevator", image: "elevator.jpg" },
  { name: "Doors & Windows", image: "numberofdoors.jpg" },
  { name: "Lighting", image: "lighting.jpg" },
  { name: "Balcony & Corridor", image: "balcony.jpg" },
  { name: "Compound Wall", image: "compoundwall.jpg" },
  { name: "Electrical", image: "electrical.jpg" },
  { name: "Water Tanks", image: "watertank.jpg" },
  { name: "Septic Tank", image: "septictank.jpg" },
  { name: "Car Parking", image: "carparking.jpg" },
  { name: "Roof Slope", image: "roofslope.jpg" },
  { name: "Pillars", image: "pillars.png" },
  { name: "Overhead Beams", image: "overheadbeams.jpg" },
  { name: "Mirror, Clock, Aquarium", image: "mirrors.jpg" },
  { name: "Shoe Rack", image: "shoerack.jpg" },
  { name: "Colours", image: "colors.jpg" },
  { name: "Study Room", image: "study-room.jpg" },
  { name: "Guest Room", image: "guestroom.jpg" },
  { name: "Storage Room", image: "store-room.jpg" },
  { name: "Dining Room", image: "diningroom.webp" },

];

const Navbar = () => {

  return (
    <nav>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card" style={{backgroundImage: `url(https://ssvconstructions.in/wp-content/uploads/2025/01/${category.image})`}}>
            <p></p>
            <Link to={`/category/${category.name.replace(/\s+/g, '-')}`} className="category-link">
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

