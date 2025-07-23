import React from 'react';
import './styles.css';

const WallCapsuleCard = ({ capsule, media = [] }) => {
    const {
        title,
        emoji,
        country,
        revealed_at,
        user,
        tags=[]
    } = capsule;

    let imageUrl = capsule.cover_image_url;

    if(!imageUrl && media.length >0) {
        const imageMedia = media.find((item) => item.type === "image" && item.url);
        imageUrl = imageMedia?.url || null;
    }
    if (!imageUrl && media.length > 0) {
        const imageMedia = media.find((item) => item.type === "image" && item.url);
        imageUrl = imageMedia?.url || null;
    }
    if (imageUrl && imageUrl.startsWith("/")) {
        imageUrl = `http://localhost:8000${imageUrl}`;
    }
    if (!imageUrl) {
        imageUrl = "https://placehold.co/640x480?text=No+Image";
    }
   

    return (
        <>
        <div className="wall-card">
        <div className="cover-image">
            <img src={imageUrl} alt="Capsule Cover" className="cover-img-el" />
            </div>

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
        </>
    );

};

export default WallCapsuleCard;