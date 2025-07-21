import React from 'react';
import './styles.css';

const WallCapsuleCard = ({ capsule }) => {
    const {
        title,
        emoji,
        country,
        revealed_at,
        user,
        cover_image_url,
        tags=[]
    } = capsule;

    const imageUrl = capsule.cover_image_url?.startsWith("http")
     ? capsule.cover_image_url
     : "https://placehold.co/640x480?text=No+Image";

    return (
        <div className="wall-capsule-card">
            <div className="cover-image" style={{backgroundImage: `url(${cover_image_url || '/default.jpg'})`,
            }}></div>

            <div className="card-content">
                <h4 className="title">{title}</h4>
                <p className="author">by {user?.name}</p>

                <div className="data">
                    <span className="emoji">{emoji}</span>
                    <span className="country">{country}</span>
                </div>

                <p className="date">Revealed on: {new Date(revealed_at).toDateString()}</p>

                <div className="tags">{tags.map((tag, idx) => (
                    <span key={idx} className="tag">#{tag}</span>))}
                </div>
            </div>
        </div>
    );

};

export default WallCapsuleCard;