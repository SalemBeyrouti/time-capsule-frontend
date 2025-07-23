import React, { useEffect, useState } from "react";
import axios from "../../../api/axios"
import CapsuleCard from "../CapsuleCard"; 
import "./styles.css";

const MyCapsules = () => {
    const [capsules, setCapsules] = useState([]);

    useEffect (() => {
        const fetchCapsules = async () => {
            try {
                const response = await axios.get("/user/mycapsules");
                setCapsules(response.data.payload);
            } catch (error) {
                console.error("Failed to fetch capsules:", error.response?.data || error.message);
            }
        };
        fetchCapsules();
    }, []);

    return (
        <div className="my-capsules-container">
            <h2>My Capsules</h2>
            <div className="capsules-grid">
                {capsules.length > 0 ? (
                   capsules.map((capsule) => ( 
                    <CapsuleCard key={capsule.id} data={capsule} />
                   ))
                ) : (
                    <p>No capsules found.</p>
                )}
            </div>
        </div>
    );
};

export default MyCapsules;