import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Details.css"

const apiUrl = process.env.SSV_CONSTRUCTION_TIPS_BACKEND_URL;

function DetailsPage() {
  const { name_of_work } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <p>Loading...</p>;

  if (error) 
    return <p>{error}</p>;
  console.log(data)
  let Entries = Object.entries(data);

  return (
    <>    <div>
      <h1>{name_of_work} Details</h1>
      <pre>{data?.work_sequences || 'No data available for this category.'}</pre>
      <pre>{data?.required_materials || 'No data available for this category.'}</pre>
      <pre>{data?.required_manpower || 'No data available for this category.'}</pre>
      <pre>{data?.required_machinary || 'No data available for this category.'}</pre>
    </div>

      <div className="details">
      <h1>{data.name_of_work}</h1>
      <p>
          {data.id}
      </p>
        <table className='table' >
        <tr>
            <th>Category</th>
            <th>Details</th>
        </tr>
            {Entries.map(([key, val], index) => (
              <tr key={index} className="tr">
                  <th >{key} </th>
                  <td><pre className='pre'>{val}</pre></td>
              </tr>
            ))}
        </table>
      </div>
</>

  );
}

export default DetailsPage;
