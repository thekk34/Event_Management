import { useState, useEffect } from "react";
import "./styles.css";

export default function Speaker() {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        const fetchSpeakers = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/?results=6");
                const data = await response.json();
                setSpeakers(data.results);
            } catch (error) {
                console.error("Error fetching speakers:", error);
            }
        };

        fetchSpeakers();
    }, []);

    return (
        <div className="speaker-container">
            <h1 className="speaker-title">🎤 Meet Our Guest Speakers 🎤</h1>
            <p className="speaker-description">
                Get inspired by top industry leaders who will share their insights and experiences.
            </p>
            <div className="speaker-grid">
                {speakers.map((speaker, index) => (
                    <div key={index} className="speaker-card">
                        <img src={speaker.picture.large} alt={speaker.name.first} className="speaker-image" />
                        <h3 className="speaker-name">{speaker.name.first} {speaker.name.last}</h3>
                        <p className="speaker-role">🌎 Expert from {speaker.location.country}</p>
                        <p className="speaker-email">📧 {speaker.email}</p>
                        <p className="speaker-phone">📞 {speaker.phone}</p>
                        <p className="speaker-bio">
                            {speaker.name.first} is an experienced speaker who specializes in cutting-edge 
                            technology and business growth strategies.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
