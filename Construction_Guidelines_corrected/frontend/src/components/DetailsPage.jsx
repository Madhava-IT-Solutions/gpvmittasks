import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {Slab} from 'react-loading-indicators';
import axios from 'axios';

import "./Details.css"

function DetailsPage() {
  const { name_of_work } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
    const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching data for: ", name_of_work);  // Log to check if name_of_work is valid
    const baseURL =  import.meta.env.VITE_SSVCONGUIDE_API_URL;
    // Fetch category data
    axios
      .get(`${baseURL}/details/${name_of_work}`)
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error:", error);  // Log detailed error to the console
        setError('Failed to fetch data');
        console.log(error)
        setLoading(false);
      });
  }, [name_of_work]);

  
  if (loading) 
    return <div className='loading-page'>
              <Slab color="#e65252" size="medium" text="" textColor="" />
              <p>Loading</p>
           </div>
  if (error) 
    return <p>{error}</p>;


  function convertNewLinesToBullets(input) {
    // Split the input by new lines, trim whitespace, and filter out empty lines
    const lines = input.split('\n').map(line => line.trim()).filter(line => line !== '');

    // Wrap each line in a bullet point
    const formattedLines = lines.map(line => `🔹 ${line}`);

    // Join the formatted lines with a line break for HTML
    return formattedLines.join('\n');
}

  const modified_data = {
    "Sequences of work" :  convertNewLinesToBullets(data.work_sequences),
    "Requred Materials": convertNewLinesToBullets(data.required_materials),
    "Required Manpower": convertNewLinesToBullets(data.required_manpower),
    "Required Machinery": convertNewLinesToBullets(data.required_machinery),
    "Required Tests" : convertNewLinesToBullets(data.required_tests),
    "Indian Codes" : convertNewLinesToBullets(data.required_codes),
    "Possible Repairs":convertNewLinesToBullets(data.possible_repairs)
  }

  function print() {
    // Select the content you want to print
    const content = document.body.innerHTML;
  
    // Add a description at the top
    const description = `
  <div style="text-align: center; margin-bottom: 20px;">
  </div>
`;

  
    // Add a watermark using inline CSS
    const watermark = `
      <style>
        @media print {
          body::after {
            content: 'SSV Constructions';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 60px;
            color: rgba(162, 162, 162, 0.1);
            z-index: -1;
            pointer-events: none;
            white-space: nowrap;

          }
        }
      </style>
    `;
  
    // Combine watermark, description, and content
    const printContent = `
      ${watermark}
      ${description}
      ${document.body.innerHTML}
    `;
  
    // Replace the page content with the print content
    document.body.innerHTML = printContent;
  
    // Trigger the print dialog
    window.print();
  
    // Restore the original content
    document.body.innerHTML = content;
  
    // Reload styles
    window.location.reload();
  }
  



  let Entries = Object.entries(modified_data);

  return (
      <div className="details">
        <div className='bar'>
        <div className='logo'>

          <img onClick={() => navigate(`/`)} className = "logoImg" src="https://ssvconstructions.in/wp-content/uploads/2025/01/SSV-Constructions-Logo.png" alt="logo"/>
        </div>
        <div className='heading'>
        <h1 className='d-heading'>{data.name_of_work}</h1>
        </div>
              

        </div>
        
        <table id = "details" className='table' >
        <tr className='tb-headings'>
            <th>Details</th>
            <th>Description</th>
        </tr>
            {Entries.map(([key, val], index) =>{
              if (!val ){
                return
              }else if (key === "id"){
                  return
              }
              else{
              return (
                  <tr key={index} className="table-row">
                      <td className='name'> {key} </td>
                      <td><pre className='description'>{val}</pre></td>
                  </tr>
                ) }  }
                )}
            </table>
            <button className='printButton' onClick={print}>Print </button>
          </div>

  );
}

export default DetailsPage;
