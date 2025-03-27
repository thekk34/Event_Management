import { useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Invalid credentials. Please try again.");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Google Sign-In failed.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleGoogleSignIn} className="google-btn">Login with Google</button>
            <p>
                Do not have an account? <Link to="/register">Sign Up</Link>
            </p>
            <p>
                Forgot password? <Link to="/forgot-password">Reset here</Link>
            </p>
        </div>
    );
}
