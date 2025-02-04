import React from 'react';
import Header from '../components/Navbar';
import '../styles/style.css';

const Home = () => {
    const handleStartTour = () => {
        window.location.href = '/tours'; // Redirect to tours page
    };

    return (
        <div>
            {/* Header Section */}
            <div className="container">
                <div className="header-content, chapter-section">
                    <h1>Elegant Yachting Tours</h1>
                    <p>An experience that will sail your dreams into reality!</p>
                    <div className="button-container, button">
                        <button className="shrink-border" onClick={handleStartTour}>
                            Start Your Tour
                        </button>
                    </div>
                </div>
              
            </div>

            {/* Discovery Section */}
            <section className="chapter-section">
                <h2>Discover the Ocean Mysteries</h2>
                <p>
                    Set sail with us as we explore untouched islands, crystal clear waters, and <br />
                    breathtaking sunsets. Every tour is a curated experience, ensuring you witness the <br />
                    beauty and tranquility of the sea. Join us on a voyage of discovery and indulge in the <br />
                    luxury that only Elegant Yachting Tours can offer.
                </p>
            </section>
        </div>
    );
};

export default Home;
