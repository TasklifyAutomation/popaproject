import { useEffect, useRef } from 'react';

export default function LivingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSpark = () => {
      const spark = document.createElement('div');
      spark.className = 'spark';
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDuration = `${8 + Math.random() * 12}s`;
      spark.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 20000);
    };

    const interval = setInterval(createSpark, 800);
    for (let i = 0; i < 15; i++) {
      setTimeout(createSpark, Math.random() * 3000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
}
