import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/prayar.png";
import img4 from "../../assets/img4.jpeg";

const projects = [
  {
    id: 1,
    title: "Task Management System",
    desc: "React dashboard with real-time analytics and drag & drop features.",
    tech: "React • Redux • SCSS",
    img: img1,
    github: "https://github.com/mohamedfrontenddev-byte/TaskManagenmentDashboard",
    demo: "https://mohamedfrontenddev-byte.github.io/TaskManagenmentDashboard",
  },
  {
    id: 2,
    title: "StockSync System",
    desc: "Smart inventory system with modern UI and API integration.",
    tech: "React • API • UI",
    img: img2,
    github: "https://github.com/mohamedfrontenddev-byte/StockSync",
    demo: "https://mohamedfrontenddev-byte.github.io/StockSync",
  },
  {
    id: 3,
    title: "Prayer App",
    desc: "Location-based prayer times with clean UX.",
    tech: "JavaScript • API",
    img: img3,
    github: "https://github.com/mohamedfrontenddev-byte/Prayar-App",
    demo: "https://mohamedfrontenddev-byte.github.io/Prayar-App/",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    desc: "Modern shopping experience with cart system.",
    tech: "React • Front-End",
    img: img4,
    github: "https://github.com/mohamedfrontenddev-byte/m.play.git",
    demo: "https://mohamedfrontenddev-byte.github.io/m.play",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="services">
      {/* HEADER */}
      <div className="header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
        >
          React • JavaScript • Front-End Development
        </motion.p>
      </div>

      {/* GRID */}
      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className={`card ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* IMAGE */}
            <div className="img-box">
              <img src={p.img} alt={p.title} />

              <div className="overlay">
                <span>View Project</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <span className="tech">{p.tech}</span>

              {/* BUTTONS */}
              <div className="actions">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn live"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}