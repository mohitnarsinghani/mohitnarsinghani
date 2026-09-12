import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  color: string;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create Realm Ember Particles
    const particles: Particle[] = [];
    const particleCount = Math.min(width < 768 ? 35 : 65, 80);
    const colors = ['#ff5722', '#e11d48', '#ff8a65', '#f43f5e', '#fb923c'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.4 - Math.random() * 0.8,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.6 + 0.1,
        maxAlpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * (width < 768 ? 0.38 : 0.28);

      // Ambient radial glow behind the title
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        baseRadius * 0.1,
        centerX,
        centerY,
        baseRadius * 2
      );
      gradient.addColorStop(0, 'rgba(225, 29, 72, 0.15)');
      gradient.addColorStop(0.5, 'rgba(255, 87, 34, 0.08)');
      gradient.addColorStop(1, 'rgba(10, 0, 2, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render Rotating Realm Sigil Concentric Rings & Orbit Nodes
      angle += 0.006;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer HUD rings
      [0.4, 0.7, 1.0, 1.3].forEach((scale, index) => {
        ctx.beginPath();
        ctx.arc(0, 0, baseRadius * scale, 0, Math.PI * 2);
        ctx.strokeStyle = index % 2 === 0 ? 'rgba(234, 179, 8, 0.25)' : 'rgba(255, 87, 34, 0.2)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // Rotating metallic gold HUD orbit nodes
      const nodeRadius = baseRadius * 0.7;
      for (let i = 0; i < 4; i++) {
        const nodeAngle = angle + (i * Math.PI) / 2;
        const nx = Math.cos(nodeAngle) * nodeRadius;
        const ny = Math.sin(nodeAngle) * nodeRadius;

        ctx.save();
        ctx.translate(nx, ny);

        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(234, 179, 8, 0.9)';
        ctx.shadowColor = '#eab308';
        ctx.shadowBlur = 10;
        ctx.fill();

        ctx.restore();
      }

      ctx.restore();

      // Render Floating Realm Embers
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around top or sides
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
