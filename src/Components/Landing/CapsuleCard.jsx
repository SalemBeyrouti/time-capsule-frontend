
function CapsuleCard({capsule}) {

    function onSubmitClick(){
        alert("clicked")
        
    }

    return <div className="capsule-card">
        <div className="capsule-image">
            <img src={capsule.url} alt={capsule.title} />
            <div className="capsule-overlay">
                <button className="submit-capsule" onClick={onSubmitClick}> Submit Capsule</button>
            </div>

        </div>
        <div className="capsule-info">
            <h3>{capsule.title}</h3> 
            <p>{capsule.submit}</p>
        </div>

    </div>


}

export default CapsuleCard;