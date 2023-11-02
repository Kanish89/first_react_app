import React, { useState, useEffect } from 'react';
import  './Slideshow.css'; 

function App() {
  const images = [
    require('./Images/image1.jpg'),
    require('./Images/image2.jpg'),
    require('./Images/image3.jpg'),
    require('./Images/image4.jpg'),

    require('./Images/image6.jpg'),
 
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    
    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <div className="slideshow-container">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
}

export default App;
