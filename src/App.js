import React from "react";
import GlitchText from "./GlitchText/GlitchText";
import './App.css';
import Squares from "./Square/Squares";
import ProjectCarousel from "./ProjectCarousel";
function App() {
  return (
    <div style={{ color: "white", padding: "20px", fontFamily: "Arial, sans-serif" }}>
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
  <GlitchText text="WAGHCHOURE" enableOnHover={false} />
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
            Hi, I’m Nathan Waghchoure — a passionate and detail-oriented BSc IT student with a strong interest in full-stack
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
  CERTFICATES
  </h3>
</div>
          {/* Add certificate images or links here */}
         <img
  src="/Nathan Waghchoure.jpg"
  alt="Nathan"
  style={{
  height:"250px",
  width:"500px"
  }}
/>

        </section>
      </main>
    </div>
  );
}

export default App;
