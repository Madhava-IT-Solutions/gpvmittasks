import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Slab} from 'react-loading-indicators';
import axios from 'axios';
import "./Details.css"

function DetailsPage() {
  const { name_of_work } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.SSV_FRONTEND 

  useEffect(() => {
    // Fetch category data
    axios
      .get(`${apiUrl}/details/${name_of_work}`)
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
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




  let Entries = Object.entries(modified_data);

  return (
      <div className="details">
      <h1>{data.name_of_work}</h1>
      {
        
      }
        <table id = "customers" className='table' >
        <tr>
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
                  <tr key={index} className="tr">
                      <td className='table-detail'> {key} </td>
                      <td><pre className='pre'>{val}</pre></td>
                  </tr>
                ) }  }
                )}
            </table>
            <button className='printButton' onClick={print}>Print </button>
          </div>

  );
}

export default DetailsPage;
