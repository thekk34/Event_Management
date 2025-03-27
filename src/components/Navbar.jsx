import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbar-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Speakers">Speakers</Link></li>
                <li><a href="https://port-folio-ten-psi.vercel.app/">Contact</a></li>
            </ul>
        </nav>
    );
}
