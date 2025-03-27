import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [registered, setRegistered] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegistered(true);
        setTimeout(() => navigate("/"), 2000);
    };

    return (
        <div className="register-container">
            <h1>Event Registration</h1>
            <p>Join us for the biggest tech event of the year!</p>
            <h2>Registration Fee: $50</h2>

            {registered ? (
                <p className="success-message">Registration Successful! Redirecting...</p>
            ) : (
                <form onSubmit={handleSubmit} className="register-form">
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <button type="submit">Register Now</button>
                </form>
            )}
        </div>
    );
}
