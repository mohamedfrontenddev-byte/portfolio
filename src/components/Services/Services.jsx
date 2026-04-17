import React from 'react';
import './Services.css'; 

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/prayar.png';
import img4 from '../../assets/img4.jpeg';

const Services = () => {
  
  // بيانات المشاريع
  const projects = [
    { 
      id: 1, 
      title: "نظام إدارة بيانات احترافي (task management system)", 
      img: img1, 
      Github: "https://github.com/mohamedfrontenddev-byte/TaskManagenmentDashboard",
      Demo: "https://mohamedfrontenddev-byte.github.io/TaskManagenmentDashboard " 
    },
    { 
      id: 2, 
      title: "StockSyncسستم ادارة مبيعات", 
      img: img2, 
      Github: "https://github.com/mohamedfrontenddev-byte/StockSync",
      Demo: "https://mohamedfrontenddev-byte.github.io/StockSync" 
    },
    { 
      id: 3, 
      title: "تطبيق مواقيت الصلاة (Prayar App)", 
      img: img3,
      Github: "https://github.com/mohamedfrontenddev-byte/Prayar-App",
      Demo: "https://mohamedfrontenddev-byte.github.io/Prayar-App/"
    },
     { 
      id: 3, 
      title:"متجرالاليكتروني", 
      img: img4,
      Github: "https://github.com/mohamedfrontenddev-byte/m.play.git",
      Demo: "https://mohamedfrontenddev-byte.github.io/m.play"
    },
 
  ];

  return (
    <section className="services-section">
      <h1 className="main-title"> Projects</h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            
            <div className="img-container">
              <img src={project.img} alt={project.title} className="project-img" />
            </div>

            <div className="card-body">
              <h3>{project.title}</h3>
              
              <div className="button-group">

                <a 
                  href={project.Demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-view"
                >
                  Live Demo
                </a>
                
                <a 
                  href={project.Github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-github"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;