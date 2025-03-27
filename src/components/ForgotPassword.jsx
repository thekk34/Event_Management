import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent.");
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Failed to send password reset email.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Reset Password</h2>
            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}
            <form onSubmit={handlePasswordReset}>
                <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Reset Password</button>
            </form>
            <p>
                Back to <Link to="/login">Login</Link>
            </p>
        </div>
    );
}
