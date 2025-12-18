import { useEffect, useRef } from 'react';

export default function Neve() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    // Trava de tamanho para evitar canvas gigante
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let { width } = canvas;
    let { height } = canvas;

    // Reduzi para 40 flocos para ser ainda mais leve
    const flocos = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      d: Math.random() * 0.5 + 0.5,
    }));

    const atualizar = () => {
      for (let i = 0; i < flocos.length; i += 1) {
        flocos[i].y += flocos[i].d ** 2 + 1;
        flocos[i].x += Math.sin(flocos[i].y / 30);
        if (flocos[i].y > height) {
          flocos[i].y = -10;
          flocos[i].x = Math.random() * width;
        }
      }
      return undefined;
    };

    const desenhar = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      flocos.forEach((f) => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        return undefined;
      });
      ctx.fill();
      atualizar();
      return undefined;
    };

    let animacaoId: number;
    const loop = () => {
      desenhar();
      animacaoId = requestAnimationFrame(loop);
      return undefined;
    };

    loop();

    const redimensionar = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        width = canvas.width;
        height = canvas.height;
      }
      return undefined;
    };

    window.addEventListener('resize', redimensionar);

    return () => {
      // IMPORTANTE: Para o loop antes de recarregar
      if (animacaoId) {
        cancelAnimationFrame(animacaoId);
      }
      window.removeEventListener('resize', redimensionar);
      return undefined;
    };
  }, []); // <--- ESSA LINHA É O QUE IMPEDE O TRAVAMENTO

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 5, // Abaixo dos botões
      }}
    />
  );
}
