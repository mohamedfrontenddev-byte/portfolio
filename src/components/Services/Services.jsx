import React from 'react';
import './Services.css'; 

// استيراد الصور
import img1 from '../../assts/img1.png';
import img2 from '../../assts/img2.png';
import img3 from '../../assts/prayar.png';
import img4 from '../../assts/img4.jpeg';
import img5 from '../../assts/metal.png';

const Services = () => {
  
  // بيانات المشاريع
  const projects = [
    { 
      id: 1, 
      title: "نظام إدارة بيانات احترافي (CRUD System)", 
      img: img1, 
      Github: "https://github.com/mohamedfrontenddev-byte/data.git",
      Demo: " Learn more about redirects" 
    },
    { 
      id: 2, 
      title: "منصة Doctor الطبية المتكاملة", 
      img: img2, 
      Github: "#",
      Demo: "#" 
    },
    { 
      id: 3, 
      title: "تطبيق مواقيت الصلاة (Prayar App)", 
      img: img3,
      Github: "#",
      Demo: "#"
    },
    { 
      id: 4, 
      title: "مشروع واجهة مستخدم حديثة 4", 
      img: img4,
      Github: "#",
      Demo: "#"
    },
    { 
      id: 5, 
      title: "تطبيق إدارة المهام Metal", 
      img: img5,
      Github: "#",
      Demo: "#"
    },
    { 
      id: 6, 
      title: "مشروع استعراضي 6", 
      img: img2,
      Github: "#",
      Demo: "#"
    },
  ];

  return (
    <section className="services-section">
      <h1 className="main-title"> Projects</h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            
            {/* منطقة الصورة مع تأثير الزووم في الـ CSS */}
            <div className="img-container">
              <img src={project.img} alt={project.title} className="project-img" />
            </div>

            <div className="card-body">
              <h3>{project.title}</h3>
              
              <div className="button-group">
                {/* زر المعاينة الحية */}
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