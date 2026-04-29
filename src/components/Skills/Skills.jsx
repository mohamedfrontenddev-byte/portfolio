import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95,  },
    { name: "CSS", level: 90,  },
    { name: "JavaScript", level: 85,  },
    { name: "React", level: 80,  },
    { name: "Bootstrap", level: 85,  },
    { name: "Git & GitHub", level: 75, },
    { name: "Responsive Design", level: 90, },
    { name: "UI/UX Principles", level: 70,  },
  ];

  return (
    <section className="skills-container">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;