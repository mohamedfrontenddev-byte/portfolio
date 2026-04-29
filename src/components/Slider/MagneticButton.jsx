import { useRef } from "react";

export default function MagneticButton({ children }) {
  const ref = useRef();

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px,${y * 0.3}px)`;
  };

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => (ref.current.style.transform = "translate(0,0)")}
      className="magnetic"
    >
      {children}
    </button>
  );
}