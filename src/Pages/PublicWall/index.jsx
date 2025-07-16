import React from 'react';
import "./styles.css";
import Navbar from '../../Components/Layout/Navbar/Navbar';
import CapsuleContent from '../../Components/Shared/CapsulesContent';

const PublicWall = () => {


  return (
    <>
    <div className="public-wall">
    <Navbar />
    <div>Hello from publci wall</div>
    <CapsuleContent />
    </div>

  
  
    </>
  )
}

export default PublicWall;
