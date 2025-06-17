import React from "react";
import GlitchText from "./GlitchText/GlitchText";
import './App.css';
import Squares from "./Square/Squares";
import ProjectCarousel from "./ProjectCarousel";
const techBadges = [
  "https://img.shields.io/badge/c++-%2300599C.svg?style=flat-square&logo=c%2B%2B&logoColor=white",
  "https://img.shields.io/badge/c-%2300599C.svg?style=flat-square&logo=c&logoColor=white",
  "https://img.shields.io/badge/c%23-%23239120.svg?style=flat-square&logo=csharp&logoColor=white",
  "https://img.shields.io/badge/dart-%230175C2.svg?style=flat-square&logo=dart&logoColor=white",
  "https://img.shields.io/badge/java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=white",
  "https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white",
  "https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E",
  "https://img.shields.io/badge/python-3670A0?style=flat-square&logo=python&logoColor=ffdd54",
  "https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white",
  "https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB",
  "https://img.shields.io/badge/next-black?style=flat-square&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white",
  "https://img.shields.io/badge/mysql-4479A1.svg?style=flat-square&logo=mysql&logoColor=white",
  "https://img.shields.io/badge/flutter-%2302569B.svg?style=flat-square&logo=Flutter&logoColor=white",
  "https://img.shields.io/badge/firebase-a08021?style=flat-square&logo=firebase&logoColor=ffcd34",
  "https://img.shields.io/badge/github-%23121011.svg?style=flat-square&logo=github&logoColor=white"
];
function App() {
  return (
    <div style={{ 
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "16px",
  width: "100%",
  boxSizing: "border-box",color: "white", padding: "20px", fontFamily: "Arial, sans-serif" }}>
           <Squares
        direction="right"
        speed={0.8}
        squareSize={40}
        borderColor="#ffffff22"
        hoverFillColor="#ffffff11"
      />
 <header className="hero-section">
     <div className="glitch-container">
  <GlitchText text="NATHAN" enableOnHover={false} />
  <img src="/port1.jpg" alt="Nathan" className="profile-pic" />
  <GlitchText text="YAKOB" enableOnHover={false} />
</div>
    </header>
      <main>
        <section style={{ marginBottom: "40px" }}>
        <div
  style={{
    background: 'rgba(255, 255, 255, 0.1)', // semi-transparent white
    backdropFilter: 'blur(10px)', // glass blur effect
    WebkitBackdropFilter: 'blur(10px)', // for Safari
    borderRadius: '12px',
    padding: '2px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    maxWidth: '1000px',
    margin: '',
    marginTop: '20px',
    textAlign: 'left'
  }}
>
  <h3 style={{ fontFamily: 'Panchang', fontSize: 'larger', color: '#fff' }}>
    About Me
  </h3>
</div> <p className="about-text">
            Hi, I’m Nathan Yakob Waghchoure — a passionate and detail-oriented BSc IT student with a strong interest in full-stack
            development, AI integration, and cybersecurity. I specialize in building responsive web applications using
            modern technologies like React, Flask, MySQL, and Python. Alongside development, I’ve completed a cybersecurity
            internship where I gained practical knowledge in threat analysis, ethical hacking, and digital forensics. With
            hands-on experience in real-time systems like face recognition login platforms and AI-driven dashboards, I strive
            to build secure, scalable, and user-centric solutions. Explore my projects to see how I blend creativity with
            technology to solve real-world challenges.
            <p className="about-text">
  My YouTube channel, <strong>Sitecrafterz</strong>, showcases my journey as a BSc IT student exploring full-stack development, AI integration, and cybersecurity. Through detailed tutorials and real-world projects, I share how to build secure and scalable web applications using React, Flask, MySQL, and Python. From face recognition login systems to AI-powered dashboards and cybersecurity tools, Sitecrafterz is where I blend creativity and technology to educate, inspire, and help others turn ideas into impactful solutions.
</p>

          </p>

        </section>

        <section style={{ marginBottom: "40px" }}>
              <div
  style={{
    background: 'rgba(255, 255, 255, 0.1)', // semi-transparent white
    backdropFilter: 'blur(10px)', // glass blur effect
    WebkitBackdropFilter: 'blur(10px)', // for Safari
    borderRadius: '12px',
    padding: '2px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    maxWidth: '1000px',
    margin: '',
    marginTop: '20px',
    textAlign: 'left'
  }}
>
  <h3 style={{ fontFamily: 'Panchang', fontSize: 'larger', color: '#fff' }}>
    PROJECTS
  </h3>
</div>        <div className="w-full flex justify-center items-center bg-black py-10">
  <ProjectCarousel />
</div>

        </section>

        <section>
  <div
  style={{
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '2px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    maxWidth: '1000px',
    marginTop: '20px',
    textAlign: 'left'
  }}
>
  <h3 style={{ fontFamily: 'Panchang', fontSize: 'larger', color: '#fff' }}>
    CERTIFICATES
  </h3>
</div>

<div
  style={{
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    padding: '10px',
    marginTop: '10px',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE and Edge
  }}
  className="scroll-container"
>
  <img
    src="/Nathan Waghchoure.jpg"
    alt="Nathan"
    style={{
      height: '250px',
      width: '500px',
      display: 'inline-block',
      marginRight: '10px',
    }}
  />
  <img
    src="/CERT1.jpg"
    alt="Cert 1"
    style={{
      height: '250px',
      width: '500px',
      display: 'inline-block',
      marginRight: '10px',
    }}
  />
  <img
    src="/CERTI2.jpg"
    alt="Cert 2"
    style={{
      height: '250px',
      width: '500px',
      display: 'inline-block',
      marginRight: '10px',
    }}
  />
  <img
    src="/CERTI3.jpg"
    alt="Cert 3"
    style={{
      height: '250px',
      width: '500px',
      display: 'inline-block',
      marginRight: '10px',
    }}
  />
</div>

<style>
  {`
    .scroll-container::-webkit-scrollbar {
      display: none;
    }
  `}
</style>

        </section>
        <footer>
          <div
  style={{
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '2px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    width: '100%',
    marginTop: '20px',
    textAlign: 'left'
  }}
>
  <h3 style={{ fontFamily: 'Panchang', fontSize: 'larger', color: '#fff', textAlign:"center" }}>
  LINKS
  </h3>


<div style={{ marginTop: '10px', display: 'flex', gap: '20px' }}>
  <a
    href="https://www.linkedin.com/in/nathan-waghchoure-7b2225353/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#0e76a8', fontSize: '30px' }}
  >
    <i className="fab fa-linkedin"></i>
  </a>
  <a
    href="https://www.instagram.com/justttnathan_/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#e1306c', fontSize: '30px' }}
  >
    <i className="fab fa-instagram"></i>
  </a>
  <a
    href="https://www.youtube.com/@SITECRAFTERZ"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#FF0000', fontSize: '30px' }}
  >
    <i className="fab fa-youtube"></i>
  </a>
  <a
  href="https://github.com/nathanyakob19"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: '#fff', fontSize: '30px' }}
>
  <i className="fab fa-github"></i>
</a>
</div>
<div
      style={{
      
      }}
    >
      <h3 style={{ fontFamily: 'Panchang', fontSize: 'larger', color: '#fff' , textAlign:"center"}}>
        My Tech Stack
      </h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: '',
          gap: '10px',
          marginTop: '15px'
        }}
      >
        {techBadges.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`badge-${i}`}
            style={{ height: '25px' }}
          />
        ))}
      </div>
    </div>

</div>

        </footer>
      </main>
    </div>
  );
}

export default App;