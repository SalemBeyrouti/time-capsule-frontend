import CapsuleCard from "../Components/Landing/CapsuleCard"
import {useState} from "react"

function CapsulePage() {

    const [searchQuery, setSearchQuery] = useState("");
    const capsules = [
        {id: 1, title: "Summertime", message: "Last summer was nice", reveal_at:"2026"},
        {id: 2, title: "bla", message: "Last summer was nice", reveal_at:"2025"},
        {id: 3, title: "boo", message: "Last summer was nice", reveal_at:"2023"},
        {id: 4, title: "hello", message: "Last summer was nice", reveal_at:"2028"}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    }

    return ( 
        
        <div className="capsule-page">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="search for capsule..." className="search-input" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="serach-button">search</button>
            </form>

            <div className="capsules-grid" >
                {capsules.map((capsule) => (
                    (<CapsuleCard capsule={capsule} key={capsule.id} />)
            ))}
            </div>
        </div>
    );
}

export default CapsulePage;