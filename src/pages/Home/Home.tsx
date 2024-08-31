import React from 'react';
import './Home.css'; 

const Home: React.FC = () => {
  return (
    <div className="home">
        <iframe
          src="https://resume.creddle.io/embed/6x3f8thxdss"
          width="850"
          height="1100"
          className="home-iframe"
          title="Resume of Timothy Villaraza"  // Add a descriptive title here
          seamless
      ></iframe>
    </div>
  );
};

export default Home;