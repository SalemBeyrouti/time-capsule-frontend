import React, { useState } from "react";
import { FaFilter, FaGlobe, FaSmile, FaCalendarAlt, FaLayerGroup } from "react-icons/fa";
import Button from "../Button"; 
import "./styles.css"

const FilterSidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <FaFilter className="filter-icon" />
        <span className="filter-title">Filters</span>
      </div>

      <div className="filter-section" onClick={() => toggleSection("countries")}>
        <FaGlobe className="section-icon" />
        <span>Countries</span>
        <span className="arrow">{openSection === "countries" ? "▲" : "▼"}</span>
      </div>
      {openSection === "countries" && <div className="filter-content">[Checkboxes or options]</div>}

      <div className="filter-section" onClick={() => toggleSection("moods")}>
        <FaSmile className="section-icon" />
        <span>Moods</span>
        <span className="arrow">{openSection === "moods" ? "▲" : "▼"}</span>
      </div>
      {openSection === "moods" && <div className="filter-content">[Checkboxes or options]</div>}

      <div className="filter-section" onClick={() => toggleSection("time")}>
        <FaCalendarAlt className="section-icon" />
        <span>Time Ranges</span>
        <span className="arrow">{openSection === "time" ? "▲" : "▼"}</span>
      </div>
      {openSection === "time" && <div className="filter-content">[Date pickers or options]</div>}

      <div className="filter-section" onClick={() => toggleSection("types")}>
        <FaLayerGroup className="section-icon" />
        <span>Content Types</span>
        <span className="arrow">{openSection === "types" ? "▲" : "▼"}</span>
      </div>
      {openSection === "types" && <div className="filter-content">[Checkboxes or toggles]</div>}

      <div className="filter-actions">
        <Button
          text="Apply Filters"
          variant="primary"
          className="apply-btn"
        />
        <Button
          text="Clear All"
          variant="secondary"
          className="clear-btn"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
