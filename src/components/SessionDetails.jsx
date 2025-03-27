import { useParams, useNavigate, Link } from "react-router-dom";
import "./styles.css";
import sessionData from "./sessionData"; // Import session data

export default function SessionDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find session by ID
    const session = sessionData.find((s) => s.id === parseInt(id, 10)) || { 
        title: "Session Not Found", 
        speaker: "", 
        time: "", 
        place: "", 
        image: "/images/notfound.jpg",
        description: "The requested session does not exist." 
    };

    return (
        <div className="session-details-container">
            <img src={session.image} alt={session.title} className="session-image" />
            <h1>{session.title}</h1>
            <h3>
                Speaker: 
                <Link to="/speakers" className="speaker-link"> {session.speaker}</Link>
            </h3>
            <p><strong>Time:</strong> {session.time}</p>
            <p><strong>Venue:</strong> {session.place}</p>
            <p className="session-description">{session.description}</p>
            <button onClick={() => navigate(-1)} className="back-btn">Go Back</button>
        </div>
    );
}
