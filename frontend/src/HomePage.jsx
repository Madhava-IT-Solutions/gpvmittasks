import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const data = [{
  "S. No.": 1,
  "Name of work": "CC Road",
  "small description":"CC Road: Construction of durable cement concrete roads for improved stability and longevity.",
  "Work sequences": "Survey and site preparation\nSubgrade preparation:  \n * Subgrade is natural soil on which the concrete slab is laid.\n * It is cleaned, shaped and levelled.\n * After cleaning, it is prepared to the required grade and profile.\n * It should be seen that the subgrade has uniform strength over its entire width.\n * If any local weak spots are found, they should be removed and strengthened by placing new material which is compacted.\n * When concrete is to be directly placed on the subgrade, the surface should be saturated with water for 6 to 20 hrs in advance of placing the concrete.\n * This is done to ensure that the subgrade does not absorb water from the concrete.\nLaying sub-base\n* When the natural subgrade is not very firm, a sub-base over the subgrade is provided.\n* Depending upon the type of soil, design load, intensity of traffic and economic consideration, the decision for providing the sub-base is taken.\n* The sub-base may consist of any one of the following layers:\n       ^ A layer of well-graded soil-gravel mixture of maximum thickness 15 cm.\n       ^ Brick soling with one layer of Water Bound Mecadam of maximum total thickness 10 cm.\n       ^ Two layers of W.B.M. of maximum total thickness 15 cm.\n       ^ A layer of lean cement concrete of maximum thickness 10 cm.\nFormwork placement:\n* The forms may be made up of steel or timber. The steel forms are of mild steel channel sections and their depth is equal to the thickness of the pavement.\n* Forms are properly braced and fixed to the ground by means of stakes. Forms are fixed in position by 3 stakes at the back of each 3 m length.\n* When the forms are fixed, they must be checked for their trueness.\n* The maximum deviations permissible in the vertical plane is 3 mm and in the horizontal plane 5 mm in the 3 m length of the form.\n* The forms are oiled before placing concrete in them.\n\nBatching of materials and Concrete mixing\n* After determining the proportions of ingredients for the Concrete mix, the fine and coarse aggregates are properly proportioned by weight in the weight-batching plant.\n* They are then fed into the hopper along with the necessary quantity of cement, which is also measured by weight.\n* The ingredients of concrete are mixed in proper proportions in a dry state. The mixing should preferably be done in a concrete mixer.\n* The measured quantity of water is added so that the desired water-cement ratio is obtained.\n\nTransportation and Placing of concrete:\n* After mixing, the concrete is transported to the site in wheel burrows or in pans which are manually carried.\n* The mixed concrete is deposited rapidly on the subgrade in layers of thickness not more than 50 mm to 80 mm or about two or three times the size of aggregates.\n* The concrete should be placed over the entire width of the bay in successive batches as a continuous operation and the topmost layer should be laid about 10 mm higher than the actual profile for further tamping.\n* The top layer should also be laid to the required camber and gradient. While placing the concrete, it is compacted to eliminate voids.\n* Segregation of concrete is avoided during transportation and placing. When reinforcement has been specified in the road slab, concrete is placed in two stages.\n* In the first stage, concrete is placed and compacted to the depth corresponding to the level of reinforcement shown in the drawings.\n* Reinforcement is then placed on top of compacted concrete and the remaining thickness of the slab is then completed in the second stage.\n\nCompaction and finishing\n* After the concrete is placed in its position, it should be brought into its proper position by heavy screed or tamper fitted with suitable handles.\n* The wooden tamper is at least 75 mm wide, and its underside is shaped to the finished cross-section of the slab.\n* Its weight is about 10 kg\/m.\n* It should have sufficient strength to retain its shape under all working conditions\n* Its length is equal to the length of the bay plus 60 mm.\n* The underside of the tamper is provided by a metal plate of 5 mm thickness.\n* The tamper is placed on the side form and its handles are gripped by the personnel who use the tamper.\n* Concrete is also compacted by means of a power-driven finishing machine or by vibrating hand screed.\n* Up to 12.5 cm thickness of slabs screed vibrators alone can be used for compaction.\n* For greater thickness, an immersion vibrator is used.\nCuring\n* Curing consists of checking the loss of water from the concrete slab, and keeping the fresh concrete slab moist during the hardening period.\n* Initial curing is done for 24 hrs.\n* By this time, the concrete becomes hard enough to walk upon and then wet mats are removed and final curing done for 2 to 3 weeks.\n* Final curing is done by any one of the following methods - Ponding Method, By covering the slab with 4 to 8 cm thick layer of wet sand or earth, and by Spraying a suitable chemical such as sodium or calcium chloride on the concrete surface.\n\nJoint cutting and sealing\n* After curing, the surface is cleaned and washed.\n* The joints are then properly filled-in attains with a suitable sealing compound.\n",
  "Required Materials": "Cement (OPC 43 or 53 grade)\nAggregates (Coarse: 20 mm, Fine: Zone II)\nSand (Clean river sand)\nWater (Potable)\nReinforcement bars (6 mm to 12 mm, if needed)\nAdmixtures (plasticizers, water reducers)\nJoint sealants (Polyurethane or silicone-based)",
  "Required Manpower": "Engineer\/Supervisor (1 per site)\nSurveyor (1 per site)\nLaborers (10–20 per 100 m stretch)\nCarpenters (2–4 per 100 m stretch)\nBar benders (2–4 per 100 m stretch, if reinforced)\nVibrating and finishing operators (2–3 per site)\nCuring team (2–4 per site)",
  "Required Machinery": "Excavator (0.9 to 1.2 m³ capacity)\nConcrete mixer (0.8 to 1 m³ capacity per batch)\nBatching plant (30–60 m³\/hour output)\nVibrating screed\/Plate compactor (5–7 kN)\nTrowel machine (5–10 HP)\nWater tanker (5000–10000 liters)\nRoad roller (8–12 tons)\nCutting machine (5–7 HP)",
  "Required Tests ": "Slump Test (for workability of concrete)\nCompressive Strength Test (cured samples)\nDensity Test\nSurface Finish Quality Check",
  "Requierd Codes": "IS 456: Code of Practice for Plain and Reinforced Concrete\nIS 3370: Code of Practice for Concrete Structures for Storage of Liquids",
  "Possible Repairs": "Surface Cracking Repairs\nJoint Sealant Application\nResurfacing if the surface is damaged\nRepairing drainage issues related to the road surface"
 },
 {
  "S. No.": 2,
  "Name of work": "BT Road",
  "small description":"BT Road: Development of bituminous roads for smooth and flexible pavements.",
  "Work sequences": "Survey and site preparation\nSubgrade preparation\nLaying sub-base\nPrime coat application\nTack coat application\nBituminous mix preparation\nBituminous mix laying\nCompaction and rolling\nFinishing\nSealing coat",
  "Required Materials": "Bitumen (VG-30 or VG-40)\nAggregates (Coarse: 20 mm, Fine: Zone II)\nSand (for bituminous mix)\nBitumen emulsion (for prime coat and tack coat)\nAdhesive agents, fillers\nHot mix asphalt\nAnti-stripping agents\nSealing coat materials",
  "Required Manpower": "Engineer\/Supervisor (1 per site)\nSurveyor (1 per site)\nLaborers (8–15 per 100 m stretch)\nSpray operator (1–2)\nTack coat team (2–3)\nMixing plant operators (2–3)\nPaving crew (5–7 per 100 m stretch)\nCompaction team (2–3)\nSealing coat team (2–3)",
  "Required Machinery": "Excavator (0.9–1.2 m³ capacity)\nGrader (12–14 tons)\nPaver finisher (5–7.5 m width)\nBitumen sprayer (4000–6000 liters capacity)\nHot mix plant (40–60 tons\/hour output)\nPaver machine (7.5–10 tons capacity)\nRoad roller (8–12 tons)\nPneumatic tire roller (15–30 tons)\nChip spreader (3–5 m width)"
 },
 {
  "S. No.": 3,
  'small description' : "Buildings: Construction of residential, commercial, or industrial structures with functionality and aesthetics.",
  "Name of work": "Buildings",
  "Work sequences": "Site clearing and excavation\nFoundation work\nPlinth beam construction\nColumn casting\nBeam and slab construction\nBrick\/block masonry work\nDoor and window frame installation\nRoofing work\nPlastering and finishing\nFlooring and tiling\nElectrical and plumbing work\nPainting and external finishing",
  "Required Materials": "Cement (OPC 43\/53 grade)\nSand (Fine aggregate)\nCoarse aggregate (20 mm)\nSteel reinforcement bars (6 mm to 25 mm)\nBricks\/Blocks\nConcrete (Ready mix or on-site)\nWater (Potable)\nElectrical and plumbing materials\nPaint and finishing materials",
  "Required Manpower": "Engineer\/Supervisor (1 per site)\nLaborers (20–50 depending on scale)\nMasons (5–10)\nCarpenters (4–6)\nBar benders (4–6)\nElectricians and Plumbers (2–4 each)\nPainters (3–5)",
  "Required Machinery": "Excavator (0.9–1.2 m³ capacity)\nConcrete mixer (0.8–1 m³ per batch)\nVibrator (2–3 HP)\nBatching plant (30–60 m³\/hour)\nCrane (10–20 tons for lifting materials)\nBar bending machine (6–12 mm capacity)\nScaffolding"
 },
 {
  "S. No.": 4,
  "Name of work": "Bridge",
  "small description":"Bridge: Erection of durable and safe structures to span physical obstacles like rivers or valleys.",
  "Work sequences": "Site survey and geotechnical investigation\nExcavation for foundations\nPile driving or well sinking (if needed)\nFoundation construction\nPier and abutment construction\nBeam or girder placement\nDeck slab construction\nFormwork and reinforcement installation\nConcrete pouring and curing\nBridge deck finishing (asphalt or concrete)\nInstallation of handrails, crash barriers, and expansion joints\nFinal inspection and load testing",
  "Required Materials": "Cement (OPC 43\/53 grade)\nCoarse aggregates (20 mm)\nFine aggregates (sand)\nSteel reinforcement bars (8–32 mm)\nStructural steel (for girders\/beams)\nPrecast concrete elements (if used)\nBitumen (for asphalt surfacing)\nWater (Potable)\nExpansion joints, handrails, crash barriers",
  "Required Manpower": "Engineer\/Supervisor (1–2 per site)\nSurveyor (1 per site)\nLaborers (20–50 depending on scale)\nMasons (5–10)\nBar benders (5–10)\nWelders (2–4)\nFormwork carpenters (6–10)\nConcrete finishers (4–6)\nCrane operators (1–2)",
  "Required Machinery": "Excavator (0.9–1.2 m³ capacity)\nPile driving machine (30–50 tons capacity)\nConcrete batching plant (30–60 m³\/hour)\nConcrete mixer (1 m³ per batch)\nCranes (20–50 tons capacity)\nVibrator (2–3 HP)\nRoad roller (8–12 tons, for surfacing)\nAsphalt paver (5–7 m width)"
 },
 {
  "S. No.": 5,
  "Name of work": "Surveying",
  "small description": "Surveying: Precise measurement and mapping of land for construction planning and design.",
  "Work sequences": "Preliminary survey and site assessment\nSetting up control points\nEstablishing benchmarks\nTopographic surveying\nDetailed site survey (using instruments)\nData collection (measurements and notes)\nData analysis and processing\nCreating survey maps and reports\nVerification and adjustments",
  "Required Materials": "Surveying instruments (total stations, theodolites)\nGPS equipment\nMeasuring tapes and chains\nLevels and tripods\nSurveying stakes and markers\nField notebooks and data sheets\nComputers and software for data processing\nSafety gear (helmets, vests)",
  "Required Manpower": "Survey Engineer (1 per site)\nSurvey Technicians (2–4)\nField Assistants (2–5)\nData Analysts (1–2)",
  "Required Machinery": "Total Station (electronic with angle accuracy of 1 second)\nGPS Survey Unit (dual frequency)\nAuto Level (accuracy of ±1.5 mm)\nComputer workstations (for data processing)\nVehicle (for transportation to site)"
 },
 {
  "S. No.": 6,
  "Name of work": "Soil Investigation",
  "small description" : "Soil Investigation: Assessment of soil properties and conditions to determine construction feasibility and foundation design.",
  "Work sequences": "Site reconnaissance and planning\nPreliminary testing (desk study)\nMarking borehole locations\nDrilling boreholes (using appropriate methods)\nSampling soil at various depths\nField testing (Standard Penetration Test, etc.)\nIn-situ testing (Cone Penetration Test, etc.)\nLaboratory testing (to determine soil properties)\nData analysis and interpretation\nPreparing soil investigation report",
  "Required Materials": "Drilling rods and bits\nSoil sampling tubes\nSPT equipment\nCone penetrometer\nField testing kits\nSafety equipment (helmets, gloves)\nSoil testing laboratory equipment\nSurveying tools (for marking)",
  "Required Manpower": "Geotechnical Engineer (1 per site)\nField Technicians (2–4)\nDrillers (2–3)\nLab Technicians (1–2)\nSafety personnel (1)",
  "Required Machinery": "Drilling rig (150–300 mm diameter)\nAuger (for soil sampling)\nCone penetration testing equipment\nSPT hammer (for field testing)\nSoil laboratory equipment (for testing properties)\nVehicle (for site transportation)"
 }]
 

function HomePage() {
  const navigate = useNavigate();
  const categories = ['CC Road ', 'BT Road', 'Bridge', 'Buildings','Surveying', 'Soil Investigation', 'Partition Work', 'Earth Work', 'Jungle Clearance', 'Flooring'];

  return (
    <div>
      <h1>Home Page</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {categories.map((name_of_work) => (
          <button key={name_of_work} onClick={() => navigate(`/details/${name_of_work}`)}>
            {name_of_work}
          </button>
        ))}
      </div>

      <div className='grid-container'>
        
    {categories.map((name_of_work, index) => (
       
       <div key={index}
       className="grid-item"
       onClick={() => navigate(`/details/${name_of_work}`)}
     >
        <img className='container-image' src={"https://e7.pngegg.com/pngimages/581/240/png-clipart-road-computer-icons-road-angle-highway-thumbnail.png"} alt={`container${index +1}` }/>
          <h2>{name_of_work}</h2>
          <p>{name_of_work}</p>
        </div>
      ))} 
   </div>
    </div>
  );
}

export default HomePage;
