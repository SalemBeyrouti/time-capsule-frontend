import React, { useState, useEffect } from "react";
import { FaFilter, FaGlobe, FaSmile, FaCalendarAlt, FaLayerGroup } from "react-icons/fa";
import Button from "../Button"; 
import "./styles.css"
import axios from "../../../api/axios";


const FilterSidebar = ({ filters, setFilters, onApply}) => {
  const [openSection, setOpenSection] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);
  const [moodSuggestions, setMoodSuggestions] = useState([]);
  const [showMoodSuggestions, setShowMoodSuggestions] = useState(false);


  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect (() => {
    const fetchCountries = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/user/public-wall/countries", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCountrySuggestions(res.data.payload || []);
      } catch (err) {
        console.error("Failed to fetch countries", err);
      }
    };
    const fetchMoods = async () => {
      try { 
        const token = localStorage.getItem("token");
        const res = await axios.get("/user/public-wall/moods", { 
          params: {
            mood: filters.mood, page:1},
          headers: { Authorization: `Bearer ${token}` },
      });
      setMoodSuggestions(res.data.payload || []);
    } catch (err) {
      console.error("Failed to fetch moods", err);
    }
  };
    fetchCountries();
    fetchMoods();
  }, []);

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
      {openSection === "countries" && <div className="filter-content"><input type = "text" placeholder="Enter country" value={filters.country} onChange= {(e) => {
        setFilters(prev => ({ ...prev, country: e.target.value })); setShowSuggestions(true);
        }}  className="filter-input" /> 
        {showSuggestions && (
          <ul className="suggestion-list">
            {countrySuggestions.filter((country) =>country.toLowerCase().includes(filters.country.toLowerCase())).map((country, idx) => (
              <li key={idx} onClick={() => {
                setFilters((prev) => ({ ...prev, country }));
                setShowSuggestions(false);}}>{country}</li>
            ))}
          </ul>
        )}
      </div>}

      <div className="filter-section" onClick={() => toggleSection("moods")}>
        <FaSmile className="section-icon" />
        <span>Moods</span>
        <span className="arrow">{openSection === "moods" ? "▲" : "▼"}</span>
      </div>
      {openSection === "moods" && <div className="filter-content">
        <input type = "text" placeholder="choose emoji" value={filters.mood} onChange={(e) => {setFilters((prev) => ({ ...prev, mood: e.target.value }));
        setShowMoodSuggestions(true);}} className="filter-input"/> {showMoodSuggestions && (
          <ul className="suggestion-list">
            {moodSuggestions.filter((mood) => mood.includes(filters.mood)).map((mood, idx) => ( <li key={idx} onClick={() => {setFilters((prev) => ({ ...prev, mood })); 
            setShowMoodSuggestions(false); }}> {mood}</li>
        ))}
          </ul>
        )}
        </div>}

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
          onClick={onApply}
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
