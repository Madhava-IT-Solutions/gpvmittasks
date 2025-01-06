import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import {Mosaic,Slab} from 'react-loading-indicators';
import Data from '../work_procedures.json';
import './Home.css';

const styles = {
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px 10px',
    width: '200px',
  },
  inputBox: {
    border: 'none',
    outline: 'none',
    flex: 1,
    fontSize: '14px',
  },
  searchIcon: {
    color: '#888',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

function HomePage() {

  const [activeField, setActiveField] = useState('Construction');

  const handleButtonClick = (field) => {
    setActiveField(field);
  };


  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [constructionItems, setConstructionItems] = useState([]);
  const [electricalItems, setElectricalItems] = useState([]);
  const [mechanicalItems, setMechanicalItems] = useState([]);

  // Separate states for each section
  const [constructionLoading, setConstructionLoading] = useState(false);
  const [constructionHasMore, setConstructionHasMore] = useState(true);

  const [electricalLoading, setElectricalLoading] = useState(false);
  const [electricalHasMore, setElectricalHasMore] = useState(true);

  const [mechanicalLoading, setMechanicalLoading] = useState(false);
  const [mechanicalHasMore, setMechanicalHasMore] = useState(true);

  // Function to load more construction items
  const loadMoreConstruction = () => {
    if (constructionLoading || !constructionHasMore) return;
    setConstructionLoading(true);

    setTimeout(() => {
      setConstructionItems((prevItems) => {
        const start = prevItems.length;
        const newItems = Data.construction.slice(start, start + 10);

        if (newItems.length < 3) setConstructionHasMore(false);
        return [...prevItems, ...newItems];
      });

      setConstructionLoading(false);
    }, 500); // Simulate 1-second loading
  };

  // Function to load more electrical items
  const loadMoreElectrical = () => {
    if (electricalLoading || !electricalHasMore) return;
    setElectricalLoading(true);

    setTimeout(() => {
      setElectricalItems((prevItems) => {
        const start = prevItems.length;
        const newItems = Data.electrical.slice(start, start + 10);

        if (newItems.length < 3) setElectricalHasMore(false);
        return [...prevItems, ...newItems];
      });

      setElectricalLoading(false);
    }, 500); // Simulate 1-second loading
  };

  const loadMoreMechanical = () => {
    if (mechanicalLoading || !mechanicalHasMore) return;
    setMechanicalLoading(true);

    setTimeout(() => {
      setMechanicalItems((prevItems) => {
        const start = prevItems.length;
        const newItems = Data.mechanical.slice(start, start + 10);

        if (newItems.length < 3) setMechanicalHasMore(false);
        return [...prevItems, ...newItems];
      });

      setMechanicalLoading(false);
    }, 500); // Simulate 1-second loading
  };

  // Handle scroll event for construction
  const handleScroll1 = () => {
    const container = document.getElementById('construction');
    if (
      container.scrollTop + container.clientHeight >= container.scrollHeight - 5 &&
      !constructionLoading
    ) {
      loadMoreConstruction();
    }
  };

  // Handle scroll event for electrical
  const handleScroll2 = () => {
    const container = document.getElementById('electrical');
    if (
      container.scrollTop + container.clientHeight >= container.scrollHeight - 5 &&
      !electricalLoading
    ) {
      loadMoreElectrical();
    }
  };

  const handleScroll3 = () => {
    const container = document.getElementById('mechanical');
    if (
      container.scrollTop + container.clientHeight >= container.scrollHeight - 5 &&
      !mechanicalLoading
    ) {
      loadMoreMechanical();
    }
  };

  useEffect(() => {
    // Initial load for construction
    loadMoreConstruction();
  }, []);

  useEffect(() => {
    // Initial load for electrical
    loadMoreElectrical();
  }, []);

  useEffect(() => {
    // Initial load for electrical
    loadMoreMechanical();
  }, []);


  return (
    <div className='home'>

        <div className='header'>
      <div className='heading-box'>
          <h1>Construction <span className='g'>Guide</span></h1>
      </div>
      <div className='search-container'>
        <div style={styles.searchContainer}>
          <input
            style={styles.inputBox}
            id='search'
            placeholder='Search...'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch style={styles.searchIcon} />
        </div>
      </div>

        </div>

      {/* Buttons */}
      
      <div className="button-bar1">
        <button 
          className={`button ${activeField === 'Construction' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Construction')}
        >
          <h2 className='work-category-heading'>Construction Works</h2>
        </button>
        <button 
          className={`button ${activeField === 'Electrical' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Electrical')}
        >
           <h2 className='work-category-heading'>Electrical Works</h2>
        </button>
        <button 
          className={`button ${activeField === 'Mechanical' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Mechanical')}
        >
          <h2 className='work-category-heading'>Mechanical Works</h2>
        </button>

      </div>

      <div className="button-bar2">
        <button 
          className={`button ${activeField === 'Construction' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Construction')}
        >
          <h2 >Construction</h2>
        </button>
        <button 
          className={`button ${activeField === 'Electrical' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Electrical')}
        >
           <h2>Electrical</h2>
        </button>
        <button 
          className={`button ${activeField === 'Mechanical' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('Mechanical')}
        >
          <h2>Mechanical</h2>
        </button>

      </div>
      
      

      {/* Display Area */}
      
        
        {activeField === 'Construction' && (
          <div
          className='grid-container'
          id='construction'
          onScroll={handleScroll1}
           // === container
        >
          {constructionItems
            .filter((item) =>
              item.name_of_work.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <div key={index} className='card' onClick={() => navigate(`/details/${item.name_of_work}`)}>
                <img
                  className='container-image'
                  src={item.image}
                  alt={`container${index + 1}`}
                />
                <h2>{item.name_of_work}</h2>
                <button className='click'>Click here</button>
              </div>
            ))}
  
          {constructionLoading && <div className ='loading-div' >  <Mosaic className='' color="#ff815d" size="large" text="Loading...." textColor="#e3a67d" /> </div>}
        </div>
        )}

{activeField === 'Electrical' && (
          <div
          className='grid-container'
          id='electrical'
          onScroll={handleScroll2}// Scrollable container
        >
          {electricalItems
            .filter((item) =>
              item.name_of_work.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <div key={index} className='card' onClick={() => navigate(`/details/${item.name_of_work}`)}>
                <img
                  className='container-image'
                  src={item.image}
                  alt={`container${index + 1}`}
                />
                <h2>{item.name_of_work}</h2>
                <button className='click'>Click here</button>
              </div>
            ))}
  
          {electricalLoading && <div className ='loading-div' >  <Mosaic className='' color="#ff815d" size="large" text="Loading...." textColor="#e3a67d" /> </div>}
        </div>
        )}


        {activeField === 'Mechanical' && (
          <div
          className='grid-container'
          id='mechanical'
          onScroll={handleScroll2}
          // Scrollable container
        >
          {mechanicalItems
            .filter((item) =>
              item.name_of_work.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <div key={index} className='card' onClick={() => navigate(`/details/${item.name_of_work}`)}>
                <img
                  className='container-image'
                  src={item.image}
                  alt={`container${index + 1}`}
                />
                <h2>{item.name_of_work}</h2>
                <button className='click'>Click here</button>
              </div>
            ))}
  
          {mechanicalLoading && <div className ='loading-div' >  <Mosaic className='' color="#ff815d" size="large" text="Loading...." textColor="#e3a67d" /> </div>}
        </div>
        )}
        

        <p className='page-description'><span className='note'>Note:</span> The Construction Guide serves as a comprehensive resource for all major works including Construction, Electrical, and Mechanical works. It provides organized and detailed information for comprehensive project planning and execution.</p>

    </div>
  );
}

export default HomePage;
