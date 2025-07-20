import React from 'react';
import "./styles.css";
import Navbar from '../../Components/Layout/Navbar/Navbar';

import FilterSidebar from '../../Components/Shared/Filtering';
import SearchBar from '../../Components/Shared/SearchBar';

const PublicWall = () => {


  return (
    <>
    
    <div className="public-wall">
    <Navbar />
    <div>Hello from publci wall</div>
    
    <SearchBar />
    <FilterSidebar />
    </div>

  
  
    </>
  )
}

export default PublicWall;
