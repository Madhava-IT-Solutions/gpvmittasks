import React, { useState } from "react";
const blogContent = {
    "Economical Construction": {
      "Planning": [
        "Opt for simple and efficient designs to minimize costs.",
        "Utilize locally available materials like sand, bricks, gravel and cement to reduce transportation expenses."
      ],
      "Estimation":[
        "Consult building planner for building estimate in consideration of required rooms like bedrooms, living room, kitchen, washrooms, staicase and parking space in the available area with future scope of extension of floors.",
        "Consult designer for type of flooring, fall ceiling , interior & exterior designing , painting and modular kitchen.",
        "Optimize the necessary facilities as per your budget."
      ],
      "Foundation": [
        "Minimize excavation by selecting suitable foundation types.",
        "Discuss with designer for planning foundation in consideration of future extention of floors.",
        "Ensure laying foundation in Summer / Winter season and in rainy season."
      ],
      "Walls and Masonry": [
        "Use cost-effective materials like hollow blocks or fly ash bricks.",
        "Reuse leftover materials for non-structural components.",
        "Opt for thinner walls with adequate insulation where feasible.",
        "Prefer to use bricks in wet area like washrooms."
      ],
      "Roofing": [
        "Avoid complex roof designs to reduce material and labor costs.",
        "Avoid long rooms to reduce the thickness of slabs.",
        "Use water proofing material during slab construction to reduce cost."
      ],
      "Electrical": [
        "Install energy-efficient fixtures with highest start rating to reduce long-term costs.",
        "Plan electrical layouts efficiently to minimize wiring expenses.",
        "Purchase electrical components in bulk for discounts."
      ],
      "Plumbing": [
        "Use cost-effective and durable materials like CPVC pipes.",
        "Plan plumbing layouts to reduce the length of pipes and fittings.",
        "Install water-saving fixtures to lower utility costs."
      ],
      "Flooring": [
        "Choose budget-friendly options like ceramic tiles or polished concrete.",
        "Use leftover tiles creatively for non-critical areas.",
        "Install durable materials to reduce replacement costs."
      ],
      "Painting": [
        "Use washable paints for longer life and reduced repainting needs.",
        "Apply primer to enhance paint durability and reduce consumption.",
        "Choose light colors to reflect more light and save on lighting costs."
      ],
      "Windows and Doors": [
        "Ensure to have sun-shades to protect doors from rain and sun.",
        "Opt for pre-fabricated MS grills to reduce labour expenses for windows.",
        "Use aluminum or UPVC frames for durability and cost-efficiency.",
        "Choose simple designs that require minimal customization."
      ],
      "Finishing": [
        "Opt for standard fittings to save on customization costs.",
        "Use modular kitchens and wardrobes for economical solutions.",
        "Avoid unnecessary decorative elements to stay within budget."
      ],
      "General Tips": [
        "Schedule construction during non-peak seasons to negotiate lower rates.",
        "Reuse materials from demolition for cost savings.",
        "Monitor progress closely to avoid wastage and delays."
      ]
    },
    "Construction methods for Long Life": {
      "Planning": [
        "Invest in robust structural designs for enhanced durability.",
        "Use branded materials with warranties and proven performance.",
        "Incorporate future expansion possibilities in the design.",
        "Avoid big trees near to building."
      ],
      "Foundation": [
        "Conduct soil testing to determine the best foundation type.",
        "Use corrosion-resistant steel and waterproofing additives.",
        "Ensure proper curing to enhance strength and lifespan.",
        "Use anti termite treatment to avoid termite nuisence."
      ],
      "Walls and Masonry": [
        "Choose high-strength bricks or AAC blocks for durability.",
        "Apply water-resistant coatings to prevent seepage.",
        "Ensure precision in masonry work for structural stability.",
        "Prefer to use chicken mesh at the juction of beam and wall."
      ],
      "Roofing": [
        "Ensure proper compaction of concrete during casting of slab with vibrator needles.",
        "Ensure proper water curing with bunding with hessain cloth especially during summer season.",
        "Use proper waterproofing techniques to prevent leaks.",
        "Incorporate thermal insulation to reduce wear and tear."
      ],
      "Electrical": [
        "Use high-quality wiring and fittings to avoid frequent replacements.",
        "Install surge protection to safeguard appliances.",
        "Plan for adequate capacity to accommodate future upgrades.",
        "Install solar power panels to reduce electricity cost.",
        "Use circuit breakers and stabilizers to protect electrical systems from overload."
      ],
      "Plumbing": [
        "Install non-corrosive pipes like CPVC or stainless steel.",
        "Ensure proper insulation for pipes exposed to extreme temperatures.",
        "Conduct periodic maintenance to prevent major issues."
      ],
      "Flooring": [
        "Choose durable materials like vitrified tiles or granite.",
        "Apply anti-skid coatings or anti-skid tiles in wet areas especially in washrooms for safety .",
        "Ensure proper subfloor preparation to prevent cracks."
      ],
      "Painting": [
        "Use weatherproof paints for exteriors to resist harsh seasonal conditions.",
        "Opt for high-quality primers to improve paint longevity.",
        "Repaint periodically to maintain the house's aesthetics."
      ],
      "Windows and Doors": [
        "Ensure to have sun-shades to protect doors from rain and sun.",
        "Choose weather-resistant materials like UPVC or treated wood.",
        "Install double-glazed windows for insulation and durability.",
        "Ensure proper sealing to prevent drafts and leaks."
      ],
      "Finishing": [
        "Use corrosion-resistant hardware for longevity.",
        "Install modular furniture with durable finishes.",
        "Choose low-maintenance materials for kitchen and bathroom fittings."
      ],
      "General Tips": [
        "Schedule regular visit by technicians like plumber, electritians and carpentors to identify and fix issues early.",
        "Use quality materials to reduce repair frequency.",
        "Incorporate design features that minimize wear and tear."
      ]
    },
    "Efficient Construction": {
      "Planning": [
        "Design the layout to maximize natural light and ventilation.",
        "Incorporate energy-efficient systems like solar panels.",
        "Use smart home devices to optimize energy usage."
      ],
      "Foundation": [
        "Add thermal insulation to reduce heat transfer.",
        "Ensure efficient drainage systems around the foundation."
      ],
      "Walls and Masonry": [
        "Use insulated blocks or panels to reduce energy consumption.",
        "Design for optimal window placement to improve ventilation.",
        "Incorporate shading elements to reduce cooling needs."
      ],
      "Roofing": [
        "Choose reflective or insulated materials to minimize heat gain.",
        "Install rainwater harvesting systems in the roof design.",
        "Use advanced techniques like precast concrete elements."
      ],
      "Electrical": [
        "Install energy-efficient lighting like LEDs.",
        "Use motion sensors to minimize electricity usage.",
        "Plan circuits to reduce energy loss.",
        "Install solar power panels to reduce the power cost."
      ],
      "Plumbing": [
        "Install water-saving fixtures to conserve water.",
        "Design plumbing layouts for efficient water flow.",
        "Incorporate rainwater and greywater reuse systems."
      ],
      "Flooring": [
        "Install radiant heating systems for energy efficiency.",
        "Choose reflective finishes to improve natural light distribution.",
        "Use materials like bamboo or cork for eco-friendliness.",
      ],
      "Painting": [
        "Use light-reflective paints to enhance natural lighting.",
        "Opt for low-VOC paints for better indoor air quality.",
        "Choose durable finishes to reduce repainting needs."
      ],
      "Windows and Doors": [
        "Install double-glazed windows for better insulation.",
        "Choose energy-efficient materials for frames and glass.",
        "Ensure proper sealing to avoid energy loss."
      ],
      "Finishing": [
        "Use modular designs to save on material and energy costs.",
        "Install energy-efficient appliances with 5 star rating in the kitchen and bathroom.",
        "Choose low-maintenance finishes to reduce resource consumption."
      ],
      "General Tips": [
        "Adopt green building practices to improve efficiency.",
        "Regularly maintain systems for optimal performance.",
        "Incorporate passive design features to reduce operational costs."
      ]
    },
    "Quality Construction": {
      "Planning": [
        "Focus on high-quality materials and craftsmanship.",
        "Consult with experts like Building planner, Structural Engineer, Geotech Engineer during the design phase.",
        "Ensure that the design complies with local building codes."
      ],
      "Foundation": [
        "Choose a foundation design suitable for the soil and location.",
        "Use high-grade concrete and reinforcement for added strength.",
        "Ensure proper curing of concrete to avoid cracks."
      ],
      "Walls and Masonry": [
        "Use top-quality bricks or concrete blocks.",
        "Ensure accurate and consistent masonry work.",
        "Seal all cracks to prevent water penetration."
      ],
      "Roofing": [
        "Use high-quality roofing materials that offer durability and weather resistance.",
        "Ensure proper installation of flashing and underlayment.",
        "Inspect the roof regularly for any signs of damage.",
        "Ensure to add water proofing compounds during slab construction."
      ],
      "Electrical": [
        "Install premium wiring and components to ensure safety.",
        "Test all electrical systems for compliance with safety standards.",
        "Use circuit breakers and stabilizers to protect electrical systems from overload."
      ],
      "Plumbing": [
        "Use high-quality pipes and fixtures to avoid leaks.",
        "Ensure water pressure is balanced and sufficient.",
        "Install water filtration systems to ensure clean water supply."
      ],
      "Flooring": [
        "Opt for durable flooring materials like marble, stone, or high-quality tiles.",
        "Ensure proper subfloor preparation to prevent cracking.",
        "Use slip-resistant finishes in wet areas like washrooms."
      ],
      "Painting": [
        "Choose high-quality paints for durability and aesthetic appeal.",
        "Ensure surfaces are properly prepared before painting.",
        "Apply multiple coats for even coverage and long-lasting results."
      ],
      "Windows and Doors": [
        "Install strong, energy-efficient windows and doors.",
        "Ensure proper sealing to avoid drafts and heat loss.",
        "Opt for impact-resistant glass for added safety.",
        "Ensure to have sun-shades to protect doors from rain and sun."
      ],
      "Finishing": [
        "Use premium materials for finishing touches like trims and moldings.",
        "Ensure all finishes are consistent and of high quality.",
        "Invest in high-end kitchen and bathroom fittings for longevity."
      ],
      "General Tips": [
        "Regularly inspect all systems for any signs of wear and tear.",
        "Use expert contractors and skilled labour for optimal results.",
        "Prioritize materials and craftsmanship that ensure long-term quality."
      ]
    },
    "Low Maintenance": {
      "Planning": [
        "Design the house with minimal moving parts and easy-to-clean surfaces.",
        "Choose low-maintenance materials that require less care over time.",
        "Plan for easy access to plumbing and electrical systems for maintenance."
      ],
      "Foundation": [
        "Use anti termite treatment to avoid termite nuisence.",
        "Choose a durable foundation material that resists cracking and shifting.",
        "Ensure proper drainage to prevent foundation issues.",
        "Use moisture barriers to prevent water damage to the foundation.",
        "Avoid trees near the foundation."
        
      ],
      "Walls and Masonry": [
        "Opt for materials that are resistant to mold, mildew, and termites.",
        "Seal all exterior walls to prevent water infiltration.",
        "Install low-maintenance siding materials like fiber cement or brick."
      ],
      "Roofing": [
        "Incorporate gutter systems to prevent water buildup.",
        "Choose roof coatings that minimize debris buildup and UV degradation."
      ],
      "Electrical": [
        "Use high-quality, durable wiring and outlets to reduce the need for repairs.",
        "Install outlets and switches that are easy to clean and maintain.",
        "Ensure proper grounding and surge protection for longevity."
      ],
      "Plumbing": [
        "Choose corrosion-resistant pipes and fittings.",
        "Install water-efficient fixtures to reduce wear and tear on plumbing.",
        "Ensure plumbing systems are properly insulated to prevent freezing."
      ],
      "Flooring": [
        "Ensure proper sealing of floors in high-moisture areas like bathrooms.",
        "Use stain-resistant carpets and rugs for living areas."
      ],
      "Painting": [
        "Choose high-durability, washable paints for both interior and exterior.",
        "Opt for stain-resistant and UV-protective finishes.",
        "Repaint every few years to prevent peeling and fading."
      ],
      "Windows and Doors": [
        "Install low-maintenance window treatments like shutters or shades.",
        "Choose durable materials like UPVC or aluminum for frames.",
        "Install weather-resistant seals to prevent air and water leakage."
      ],
      "Finishing": [
        "Use scratch-resistant finishes for countertops and surfaces.",
        "Install easy-to-maintain hardware for doors and cabinets.",
        "Opt for low-maintenance landscaping with native plants."
      ],
      "General Tips": [
        "Perform regular cleaning and maintenance to keep systems running smoothly.",
        "Choose finishes and materials that require minimal upkeep.",
        "Design systems for ease of access to facilitate future maintenance."
      ]
    },
    "Material Selection": {
      "Planning": [
        "Choose materials that offer long-term durability and minimal maintenance.",
        "Opt for materials with energy-efficient properties."
      ],
      "Foundation": [
        "Select high-quality concrete or reinforced concrete for the foundation.",
        "Choose materials that are resistant to soil movement and moisture.",
        "Use PSC concrete for foundations based on soil conditions."
      ],
      "Walls and Masonry": [
        "Opt for durable materials like concrete blocks, AAC blocks, or high-strength bricks.",
        "Use non-toxic and eco-friendly materials for interior finishes.",
        "Consider thermal mass materials that offer energy efficiency."
      ],
      "Roofing": [
        "Consider lightweight materials to reduce stress on the structure.",
        "Select materials with reflective properties to reduce heat gain."
      ],
      "Electrical": [
        "Use high-quality copper wiring for better conductivity.",
        "Choose energy-efficient components for long-term savings.",
        "Ensure that electrical panels and wiring meet the required standards."
      ],
      "Plumbing": [
        "Select corrosion-resistant pipes such as copper or CPVC.",
        "Use eco-friendly plumbing materials for water conservation.",
        "Opt for water-efficient fixtures to reduce consumption."
      ],
      "Flooring": [
        
        "Opt for flooring materials that are easy to clean and maintain.",
        "Use marble, granite, vetrified tiles or coloured concrete flooring based upon your priority."
      ],
      "Painting": [
        "Select paints that are free from harmful chemicals like VOCs.",
        "Choose colors and finishes that enhance the durability of walls.",
        "Use moisture-resistant paints in high-humidity areas."
      ],
      "Windows and Doors": [
        "Select high-quality materials like fiberglass or UPVC for frames.",
        "Install energy-efficient glass to improve insulation.",
        "Choose durable, weather-resistant materials for longevity.",
        "Ensure to have sun-shades to protect doors from rain and sun."
      ],
      "Finishing": [
        "Use high-quality, low-maintenance materials for countertops and cabinetry.",
        "Opt for eco-friendly and durable finishes for interior surfaces.",
        "Choose materials that align with the home's energy efficiency goals."
      ],
      "General Tips": [
        "Research the lifespan and environmental impact of materials before selection.",
        "Choose materials that minimize the need for future repairs.",
        "Ensure proper installation to maximize the longevity of chosen materials."
      ]
    },
    "Faster Construction": {
      "Planning": [
        "Finalize designs and approvals before construction starts.",
        "Use modular designs to reduce on-site construction time.",
        "Engage skilled labor to improve work efficiency."
      ],
      "Foundation": [
        "Use pre-mixed concrete to save time.",
        "Adopt advanced techniques like pile foundations for high rise structures faster completion.",
        "Work in multiple shifts for quicker execution."
      ],
      "Walls and Masonry": [
        "Use prefabricated walls or panels for quick installation.",
        "Adopt dry construction techniques where possible.",
        "Streamline workflows to avoid unnecessary delays."
      ],
      "Roofing": [
        "Use prefabricated roof panels for quick installation.",
        "Install modular roofing systems to save time.",
        "Use lightweight materials like steel sheets for easier handling.",
        "Plan simultaneous tasks to optimize project timelines."
      ],
      "Electrical": [
        "Pre-wire electrical components for rapid installation.",
        "Use quick-connect systems to simplify connections.",
        "Coordinate with other teams to avoid overlap and delays."
      ],
      "Plumbing": [
        "Install pre-fabricated plumbing modules.",
        "Use push-fit or compression fittings for quicker connections.",
        "Plan ahead to minimize rework and delays."
      ],
      "Flooring": [
        "Use pre-cut tiles to reduce on-site adjustments.",
        "Employ fast-curing adhesives for quicker completion.",
        "Opt for quick-install options like vinyl or laminate flooring."
      ],
      "Painting": [
        "Use spray painting techniques for faster coverage.",
        "Select quick-drying paints for reduced waiting time.",
        "Organize painting tasks to minimize interruptions."
      ],
      "Windows and Doors": [
        "Use pre-fabricated wooden frames and MS grills for faster installation.",
        "Choose modular windows to save on assembly time.",
        "Install frames and sashes in parallel to optimize time."
      ],
      "Finishing": [
        "Adopt pre-finished materials for quicker application.",
        "Use modular kitchens and wardrobes to reduce customization time.",
        "Coordinate activities to streamline finishing tasks."
      ],
      "General Tips": [
        "Use project management tools to monitor progress.",
        "Procure materials in advance to avoid supply delays.",
        "Plan overlapping tasks to optimize the schedule."
      ]
    },
    "Construction with Safety": {
      "Planning": [
        "Ensure compliance with local building codes and safety regulations.",
        "Consult with structural engineers and safety experts during design.",
        "Plan for fire safety by including appropriate fire exits and fire-resistant materials."
      ],
      "Foundation": [
        "Use high-strength concrete and steel reinforcements to prevent foundation failure.",
        "Conduct soil testing to determine the suitability of the foundation for the structure.",
        "Ensure proper drainage systems to prevent water damage and erosion of the foundation."
      ],
      "Walls and Masonry": [
        "Use strong, load-bearing materials like reinforced concrete or brick.",
        "Ensure that walls are properly aligned and have adequate support.",
        "Install safety barriers on scaffolding to protect workers during construction."
      ],
      "Roofing": [
        "Ensure that roofing materials are installed securely to prevent accidents.",
        "Use fall protection systems for workers during roofing installations.",
        "Inspect roofing systems regularly for wear and damage."
      ],
      "Electrical": [
        "Install circuit breakers and grounding systems to avoid electric shocks or fires.",
        "Ensure all electrical installations are carried out by professionals.",
        "Use insulated and protective wiring to prevent electrical hazards."
      ],
      "Plumbing": [
        "Install backflow prevention devices to prevent contamination of the water supply.",
        "Use non-corrosive pipes and fittings to reduce the risk of leaks and water damage.",
        "Ensure that plumbing systems are properly vented to prevent hazardous gas buildup."
      ],
      "Flooring": [
        "Install slip-resistant flooring in high-traffic and wet areas to prevent accidents.",
        "Ensure proper subfloor preparation to avoid accidents caused by uneven flooring.",
        "Use low-VOC adhesives to reduce health hazards during installation."
      ],
      "Painting": [
        "Use non-toxic, low-VOC paints to reduce the risk of respiratory issues.",
        "Ensure proper ventilation during painting to prevent inhalation of harmful fumes.",
        "Wear appropriate protective gear (gloves, masks, goggles) during painting."
      ],
      "Windows and Doors": [
        "Ensure windows and doors are securely installed to prevent accidents.",
        "Use tempered or laminated glass for windows to reduce the risk of breakage.",
        "Install safety locks and latches on doors and windows, especially in areas with children."
      ],
      "Finishing": [
        "Use fire-resistant and non-toxic materials for finishes.",
        "Install handrails and guardrails on stairs to prevent falls.",
        "Ensure that all finishes are free from sharp edges or hazardous materials."
      ],
      "General Tips": [
        "Regularly inspect construction sites for potential hazards and unsafe conditions.",
        "Ensure workers use appropriate personal protective equipment (PPE) at all times.",
        "Develop and communicate an emergency response plan for construction sites."
      ]
    }
};

let user ={
  name : "Arya",
  age : 23,
};
let entries = Object.entries(user)

let data = entries.map( ([key, val] = entry) => {
return `The ${key} is ${val}`;
});



const BlogDetails = ({ category }) => {

    let Entries = Object.entries(blogContent[category])
    console.log(Entries)

    let eachBox  = Entries.map(([key, val] = entry ) => {
      return <div key = {key}>
        <h3 className="h3">{key}</h3>
        <ul className="ul">{val.map(line =><li key={line}>{line}</li>)}</ul>
      </div>
  })
   


  return ( 
    <div className="blogdetails">
      {eachBox}
    </div>
  );
};

export default BlogDetails;
