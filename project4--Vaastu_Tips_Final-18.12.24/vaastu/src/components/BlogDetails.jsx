import React, { useState } from "react";


const blogContent = {
  "Plot Selection":{
    "blog": "Choose a plot with a square or rectangular shape, facing east or north for positive energy and growth. Avoid plots with irregular shapes or located at a T-junction.",
    "placement": "East, North, Northeast facing plots.",
    "tips": "Square or Rectangular plots are best.",
    "avoid": "Irregular shapes, South-facing plots."
},
  "Main Entrance": {
    "blog": "The main entrance should ideally face east or north, as it invites prosperity. Ensure it is well-lit, clutter-free, and grand, symbolizing a welcoming space.",
    "placement": "North, East, North-East",
    "tips": "Keep the entrance bigger than internal doors.",
    "avoid": "South-West, South-East"
},
  "Living Room": {
    "blog": "Place the living room in the northeast or north direction. Arrange seating to face east or north, promoting conversation and harmony.",
    "placement": "North-East, East, North  Guests should sit facing East or North.",
    "tips": "Keep heavy furniture in the southwest.\nWhich promotes positive conversations and energy exchange.",
    "avoid": "South-West , Avoid Facing south while seating."
},
  "Kitchen": {
    "blog": "The kitchen should be in the southeast corner. Proper ventilation such as windows and exhaust fans ensures good air circulation and positive energy flow.",
    "placement": "Southeast (Agni corner), or Northwest",
    "tips": "Face East or North while cooking,\nAllows fresh air to flow and eliminates smoke or odours.",
    "avoid": "North-East, South-West"
},
  "Master Bedroom": {
    "blog": "Position the master bedroom in the southwest corner for stability. The bed should face east or south for restful sleep.",
    "placement": "South-West",
    "tips": "Head of bed should face South or West which Promotes restful sleep. ",
    "avoid": "North-East and head should not face East or North."
},
  "Cupboard & Locker": {
    "blog": "Place cupboards and lockers along the south or southwest walls, opening toward the north to attract prosperity.",
    "placement": "Southwest corner. Doors should open towards East or North.",
    "tips": "Ensures financial stability and promotes better financial management and organization.",
    "avoid": "Southeast or Southwest-facing"
},
"Washroom": {
  "blog": "Locate washrooms in the northwest or southeast corners. Avoid placing them in the northeast to maintain positive energy.",
  "placement": "West, Northwest",
  "tips": "Toilets should be in the northwest corner.",
  "avoid": "Northeast, Southwest"
},
"Children’s Room":{
  "blog": "The west or northwest is ideal for children’s rooms, with study tables facing east for concentration and growth.",
  "placement": "West, North-West, South-East",
  "tips": "Create free air circulation",
  "avoid": "South-West, North-East"
},
"Pooja Room": {
  "blog": "Place the pooja room in the northeast, facing east or north. Deities should face west or south for optimal blessings.",
  "placement": "Northeast, Deity should face West while praying towards East.",
  "tips": "Face East or North while praying. \nKeep the idols at least an inch away from the wall.",
  "avoid": "Avoid puja room in South, Under staircase, Bedroom. \nPlacing idols in the South direction."
},
"Home Office":{
  "blog": "A home office is best in the northwest or northeast. Sit facing east or north to boost productivity and focus.",
  "placement": "West or Northwest direction",
  "tips": "Face East or North while working.",
  "avoid": "South-East"
}, 
"Staircase": {
  "blog": "Staircases should spiral clockwise and be in the southwest, west, or south. avoiding the northeast to prevent energy loss.",
  "placement": "South, Southwest, West",
  "tips": "Should ascend clockwise.",
  "avoid": "North-East"
},"Elevator": {
"blog": "Install elevators in the west or south for optimal space utilization and energy alignment.",
"placement": "Southwest direction",
"tips": "Ensure proper ventilation in the elevator area.",
"avoid": "North-East"
},
"Doors & Windows": {
  "blog": "Ensure doors and windows align with each other and are placed in the east, north, or northeast for good airflow and light.",
  "placement": "East or North-facing for most doors. \nInternal doors should align with each other. \nMaintain even number of doors/windows like 2, 4, 6 etc..,",
  "tips": "Doors should open inwards, not outwards. \nProvides smooth energy flow between rooms. \nLarger windows on the North and East sides.\nEnsure proper cross-ventilation throughout the house. \nMaintain symmetry with the number of doors and windows.",
  "avoid": "South, West facing doors and Misaligned doors. \nAvoid poor ventilation.\nAvoid Odd number of doors/windows."
},
"Lighting":{
  "blog": "Natural light is vital in the east and north directions. Soft artificial lighting enhances warmth and positivity.",
  "placement": "Maximum natural light from East and North",
  "tips": "Use artificial light in darker corners to ensure brightness.",
  "avoid": "Dark, gloomy areas"
},
"Balcony & Corridor":{
"blog": "Corridors should be wide and well-lit. Balconies and verandas are ideal in the east or north for fresh air and sunlight.",
"placement": "East or North direction",
"tips": "Ensure they are well-lit and properly ventilated.\nThe North or East-facing balcony ensures morning sunlight.\nOpen veranda in the East ensures good energy flow.",
"avoid": "South-West, South, West"
},"Compound Wall":{
"blog": "The compound wall should be taller on the south and west sides for stability and shorter on the north and east to allow energy flow.",
"placement": "Higher on the West and South sides",
"tips": "South and West should have thicker and higher walls.",
"avoid": "Higher walls in North and East"
},"Electrical":{
"blog": "Position heavy electrical equipment in the southeast corner. Avoid placing them in the northeast to maintain balance.",
"placement": "Southeast corner for electrical gadgets (like AC, fridge).",
"tips": "Kitchen electronics should be in the Southeast.",
"avoid": "Northeast for heavy equipment"
},"Water Tanks":{
"blog": "Place overhead tanks in the southwest for stability and underground tanks in the northeast for positive energy.",
"placement": "Southwest (Overhead), Northeast (Underground)",
"tips": "Underground tank brings prosperity if in Northeast.\nKeep it elevated and it should be heavier and on a strong platform.",
"avoid": "Overhead tank in the Northeast"
},"Septic Tank": {
"blog": "Locate septic tanks in the northwest or southeast, ensuring they are far from the center of the house.",
"placement": "Northwest",
"tips": "Should be as far as possible from the main building.",
"avoid": "Northeast, Southwest"
},"Car Parking":{
"blog": "Parkings or garage should be in the northwest or southeast, with the vehicle facing east or north when parked.",
"placement": "Southeast or Northwest & parking should be in North, East. ",
"tips": "Ensure the shed is not touching the house walls.",
"avoid": "Southwest"
},"Roof Slope":{
"blog": "The roof should slope toward the north or east to ensure water drainage and prosperity.",
"placement": "Sloping towards the North or East.",
"tips": "Helps in draining water and enhancing positive energy flow.",
"avoid": "Slope towards South or West."
},"Pillars":{
"blog": "Avoid placing pillars in the center or at entryways. They should align with the walls to maintain flow and structure.",
"placement": "In corners or symmetrical placements.",
"tips": "Avoid obstructing the center of the house with pillars.",
"avoid": "Middle of the house or rooms."
},"Overhead Beams":{
"blog": "Avoid sitting or sleeping under beams as they create pressure. Conceal them with false ceilings for aesthetics and balance.",
"placement": "Should not be directly above beds or sitting areas.",
"tips": "Can cause mental stress if placed over major spaces.",
"avoid": "Beds, work areas"
},"Mirror, Clock, Aquarium":{
"blog": "Place mirrors on the north or east walls to reflect positivity. Clocks should face east, and aquariums are ideal in the north or northeast.",
"placement": "North, East",
"tips": "Avoid reflecting the bed with mirrors.\nEnsure that clocks are working Avoid placing in the bedroom. \nFish tanks bring prosperity but should be well-maintained.",
"avoid": "Bedroom (Reflecting the bed), Avoid in South."
},"Shoe Rack":{
"blog": "Position shoe racks near the main entrance, avoiding the north, east, or northeast directions.",
"placement": "West or South direction near the entrance.",
"tips": "Keep shoes in a closed cabinet to avoid clutter.",
"avoid": "North or East"
},"Colours":{
"blog": "Use light colors like white, cream, or pastels for walls to promote calmness and positive energy.",
"placement": "Light pastel to wall colors for positive energy,\nPastel shades, Light tones (White, Cream, Yellow, etc.) ,  \nLight colors like beige or off-white to the staircase.",
"tips": "North rooms can be green, while South rooms can be red or pink.\nUse light colors for calmness and peace.\nPaint the stairs with light, neutral colors for positivity.",
"avoid": "Dark colors like red and black."
},"Study Room":{
"blog": "The study room should face east or north for clarity of mind and concentration.",
"placement": "East, North, North-East",
"tips": "Face East or North while studying.",
"avoid": "South, West"
},"Guest Room":{
"blog": "Place guest rooms in the northwest to ensure comfort and balance for visitors.",
"placement": "North-West",
"tips": "Use soothing colors and minimal furniture \nto create a calm and welcoming atmosphere for guests.",
"avoid": "South-East, South-West"
},"Storage Room":{
"blog": "Storage rooms are best in the South-West to manage clutter and maintain organization.",
"placement": "South or West direction",
"tips": "Avoid clutter in the storage room & use it for seasonal items.",
"avoid": "North-East"
},"Dining Room":{
"blog": "The dining room is ideal in the west or east, with the family facing east while eating for harmony.",
"placement": "West, East",
"tips": "Dining room should be near the kitchen.",
"avoid": "South of the kitchen"
}
};


const BlogDetails = ({ category }) => {


  return (
    <div className="blogdetails">
      <p>{blogContent[category]["blog"] }</p>
  
      <h3 style={{color:'#a90000'}}>Ideal Direction</h3>
      <pre className="blogp" >{blogContent[category]["placement"] }</pre>
     
      <h3 style={{color:'#a90000'}}>Additional Tips</h3>
      <pre className="blogp">{blogContent[category]["tips"]}</pre>

      <h3 style={{color:'#a90000'}}>Avoid</h3>
      <pre className="blogp">{blogContent[category]["avoid"]}</pre>
    
    </div>
  );
};

export default BlogDetails;
