import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, className = "" }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // only set true, never false
          observer.unobserve(entry.target); // stop observing after reveal
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[15px]"} ${className}`}
    >
      {children}
    </div>
  );
}
