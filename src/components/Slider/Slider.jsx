import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background3D from "./Background3D";
import MagneticButton from "./MagneticButton";
import "./Slider.css";

const slides = [
  {
    title: "Revolutionizing UX",
    category: "Architecture",
    desc: "Architecting seamless digital journeys.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "React Ecosystem",
    category: "Logic",
    desc: "Building scalable front-end systems.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Visual Storytelling",
    category: "Design",
    desc: "Where design meets engineering.",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (hover) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [index, hover]);

  return (
    <section
      className="slider"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        setMouse({ x, y });
      }}
    >
      <Background3D />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="slide"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -100 || velocity.x < -500) next();
            if (offset.x > 100 || velocity.x > 500) prev();
          }}
        >
          <motion.img
            src={slides[index].img}
            className="img"
            animate={{ x: mouse.x, y: mouse.y }}
            transition={{ type: "spring", stiffness: 50 }}
          />

          <div className="content">
            <span>{slides[index].category}</span>

            <h1>
              {slides[index].title.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <p>{slides[index].desc}</p>

            <MagneticButton>Explore Work</MagneticButton>

            <div className="nav">
              <button onClick={prev}>←</button>
              <button onClick={next}>→</button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="progress">
        <motion.div
          key={index}
          className="bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5 }}
        />
      </div>
    </section>
  );
}