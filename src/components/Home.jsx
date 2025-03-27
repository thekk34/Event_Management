import { Link } from "react-router-dom";
import './styles.css';
import Navbar from './Navbar';
import Card from './Card';
import image1 from './photo/image4.jpg'
import image2 from './photo/image5.jpg'
import image3 from './photo/image6.jpg'
import image4 from './photo/image7.jpg'
import image5 from './photo/image8.jpg'
import image6 from './photo/image9.jpg';
import image7 from './photo/image10.jpg';
import image11 from './photo/image11.jpg';
import Card2 from './Card2';
import Footer from './Footer';


const image = [
    { id: 1, image: image1, type: "Singing", title: "Singing Workshop", summary: "Join us for an amazing singing workshop.", time: "Feb 15, 2025 | 10:00 AM - 11:30 AM", place: "Greenway Park, Tech City", price: "Free" },
    { id: 2, image: image2, type: "Cycling", title: "Cycling Marathon", summary: "Experience an exciting cycling marathon.", time: "Feb 16, 2025 | 12:00 PM - 1:30 PM", place: "Room 301, Tech Hub", price: "$10" },
    { id: 3, image: image3, type: "Horse Riding", title: "Horse Riding Basics", summary: "Learn the fundamentals of horse riding.", time: "Feb 17, 2025 | 02:00 PM - 3:30 PM", place: "AI Lab, Innovation Center", price: "$20" },
    { id: 4, image: image4, type: "Traveling", title: "Traveling Stories", summary: "Discover amazing travel experiences.", time: "Feb 18, 2025 | 04:00 PM - 5:30 PM", place: "Main Hall, Tech Arena", price: "$15" },
    { id: 5, image: image5, type: "Event", title: "Tech Conference", summary: "Explore the latest in technology.", time: "Feb 19, 2025 | 06:00 PM - 7:30 PM", place: "Security Room, Tech Tower", price: "$25" },
    { id: 6, image: image6, type: "Webinars", title: "AI and the Future", summary: "A deep dive into AI advancements.", time: "Feb 20, 2025 | 08:00 PM - 9:30 PM", place: "Startup Hub, Tech Park", price: "$30" },
    { id: 7, image: image7, type: "Webinars", title: "Cloud Computing", summary: "Understanding the cloud revolution.", time: "Feb 21, 2025 | 10:00 AM - 11:30 AM", place: "Cloud Lab, IT Plaza", price: "Free" },
    { id: 8, image: image11, type: "Cricket", title: "Cricket Training", summary: "Sharpen your cricket skills online.", time: "Feb 22, 2025 | 12:00 PM - 1:30 PM", place: "Virtual Online Session", price: "$5" }
];




export default function Home() {
    return (
        <>
            <div className="container">
                <Navbar />
                <div className="hero">
                    <h1 className="hero-title">Biggest Tech Event</h1>
                    <p className="hero-subtitle">Growing The Global Technology Industry</p>
                    <h2 className="hero-date"> February 25, 2025</h2>
                    <Link to="/register"><button className="register-btn">Register Now</button></Link>
                </div>
            </div>

            <div className="all-event">
                <h3 className="logo1">Welcome to My Power Tech Event</h3>
                <h5 className="paragraph">
                    Explore the future of what is possible at TecH.e. Join developers, creators,
                    and designers to learn the latest tech, connect with experts, and get inspired.
                </h5>
                <h1 className="upcoming">Upcoming Events</h1>
                <span className="progress-bar"></span>
            </div>

            <div className='box3'>
                {/* <div className="event-grid">
                    {image.map((event, index) => (
                        <Link to="/events" key={index} className="event-card-link"> 
                            <div className='card1'>
                                <Card className="card" image={event} />
                            </div>
                        </Link>
                    ))}
                </div> */}
                <div className="event-grid">
                        {image.map((event) => (
                        <Link to="/events" key={event.id} className="event-card-link"> 
                        <div className='card1'>
                               <Card event={event} />
                        </div>
                        </Link>
        ))}
      </div>

                <div className='session'>
                    <h1>Our Session Schedule</h1>
                    {[...Array(8)].map((_, index) => (
                        <Link to={`/session/${index}`} key={index} className='card2-link'>
                            <div className='card2'>
                                <Card2 className="card2" image={image[index%image.length]} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='footer'>
                <Footer />
                
            </div>
        </>
    );
}
