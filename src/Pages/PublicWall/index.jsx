import "./styles.css";
import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import Button from "../../Components/Shared/Button/index.jsx";
import SearchBar from '../../Components/Shared/SearchBar';
import Navbar from '../../Components/Layout/Navbar/Navbar';
import WallCapsuleCard from "../../Components/Shared/WallCapsuleCard.jsx";
import FilterSidebar from '../../Components/Shared/Filtering';


const PublicWall = () => { 
  const [capsules, setCapsules] = useState([]);
  const [mediaMap, setMediaMap] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    country: "",
    mood: "",
    start_date: "",
    end_date: "",
  });
  const navigate = useNavigate();
  
  const activeFilters = {};
  if (filters.country) activeFilters.country = filters.country;
  if (filters.mood) activeFilters.mood = filters.mood;
  if (filters.start_date && filters.end_date) {
    activeFilters.start_date = filters.start_date;
    activeFilters.end_date = filters.end_date;
  }

  const fetchCapsules = async (page = 1) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/user/public-wall`, {
        params: {...activeFilters, page },
        headers: { Authorization: `Bearer ${token}` }
      });

      const capsulesData = response.data.payload.data;
      setCapsules(capsulesData);
      setCurrentPage(response.data.payload.current_page);
      setLastPage(response.data.payload.last_page);
      const newMediaMap = {};
      for (const capsule of capsulesData) {
        newMediaMap[capsule.id] = capsule.media || [];
        }
        setMediaMap(prev =>({...prev, ...newMediaMap}));
      } catch (error) {
        console.error('Failed to load capsules:', error.response?.data || error.message);
      }
      setIsLoading(false);
      
  };

  useEffect(() => {
    fetchCapsules(1);
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
        
          <FilterSidebar filters={filters} setFilters={setFilters} onApply={() => fetchCapsules(1)}  />
        

        <div className="capsule-right-section">
          <div className="capsule-grid">
            {console.log("Capsule", capsules)}
            {capsules.map((capsule) => (
              <div className="capsule-card-wrapper" key={capsule.id} onClick={() => navigate("/previewcapsule", {
                state: { capsuleData: capsule, capsuleId: capsule.id, media: mediaMap[capsule.id] || [],},
              })
            }>
              
              <WallCapsuleCard capsule={capsule} media={mediaMap[capsule.id] || []} />
          
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <Button disabled={currentPage === 1} onClick={() =>fetchCapsules(currentPage - 1) } variant="primary" text="<- Prev"/>
          {Array.from({ length: lastPage}, (_, index) => {
            const pageNum = index +1;
            return (
              <Button  key={pageNum} onClick={() => fetchCapsules(pageNum)} text={String(pageNum)} variant={pageNum === currentPage ? "primary" : "secondary"} />

            );
          })}
          <Button  disabled={currentPage === lastPage}  onClick={() => fetchCapsules(currentPage + 1)} text="Next →" variant="primary"/>

        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PublicWall;
