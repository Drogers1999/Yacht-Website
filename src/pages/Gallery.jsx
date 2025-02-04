import React from 'react';
import '../styles/style.css';

const GallerySection = () => {
    return (
        <main className="container">
            <section>
                <h1>Gallery</h1>
                <div className="responsive">
                    <div className="gallery">
                        <img src="/images/gallery-image1.jpg" alt="Yacht" width="350" height="200" />
                        <img src="/images/gallery-image2.jpg" alt="Yacht interior kitchen" width="350" height="200" />
                        <img src="/images/gallery-image3.jpg" alt="Yacht Lounge" width="350" height="200" />
                        <img src="/images/gallery-image4.jpg" alt="Yacht dining area" width="350" height="200" />
                    </div>
                </div>
                <div className="clearfix"></div>
            </section>
        </main>
    );
};

export default GallerySection;