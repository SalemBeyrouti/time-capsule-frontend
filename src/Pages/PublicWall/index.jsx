import "./styles.css";
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../Components/Shared/SearchBar';
import Navbar from '../../Components/Layout/Navbar/Navbar';
import WallCapsuleCard from "../../Components/Shared/WallCapsuleCard.jsx";
import FilterSidebar from '../../Components/Shared/Filtering';


const PublicWall = () => { 
  const [capsules, setCapsules] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    const fetchCapsules = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/user/public-wall', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCapsules(response.data.payload.data);
      } catch (error) {
        console.error('Failed to load capsules:', error.response?.data || error.message);
      }
    };
    fetchCapsules();
  }, []);


  return (
    <>
    
    <div className="public-wall">
      <Navbar />
      <div className="wall-header">
        <h2> Time Capsule Wall</h2>
        <SearchBar />
      </div>
      
      <div className="wall-content">
        <div className="filter-sidebar">
          <FilterSidebar />
          
        </div>
        <div className="capsule-grid">
          {capsules.map((capsule) => (
            <div className="capsule-card-wrapper" key={capsule.id} onClick={() => navigate("/previewcapsule", {
              state: { capsuleData: capsule, capsuleId: capsule.id},
            })
          }>
            <WallCapsuleCard capsule={capsule} />
        
          </div>
          ))}
        </div>
        </div>
        
      </div>
    </>
  );
};

export default PublicWall;
