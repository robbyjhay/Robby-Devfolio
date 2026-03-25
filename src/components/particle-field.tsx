"use client";

import { useEffect, useRef, useCallback } from "react";

// ── Bold dot-matrix font: 7 wide × 9 tall bitmaps for thick, heavy letters ──
const FONT: Record<string, number[][]> = {
  R: [
    [1,1,1,1,1,0,0],
    [1,1,0,0,1,1,0],
    [1,1,0,0,1,1,0],
    [1,1,1,1,1,0,0],
    [1,1,1,1,0,0,0],
    [1,1,0,1,1,0,0],
    [1,1,0,0,1,1,0],
    [1,1,0,0,1,1,0],
    [1,1,0,0,0,1,1],
  ],
  O: [
    [0,1,1,1,1,1,0],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [0,1,1,1,1,1,0],
  ],
  B: [
    [1,1,1,1,1,1,0],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,1,1,1,1,0],
    [1,1,1,1,1,1,0],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,1,1,1,1,0],
  ],
  Y: [
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [0,1,1,0,1,1,0],
    [0,1,1,0,1,1,0],
    [0,0,1,1,1,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
  ],
  J: [
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [0,1,1,1,1,1,0],
  ],
  H: [
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
  ],
  A: [
    [0,0,1,1,1,0,0],
    [0,1,1,0,1,1,0],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,1,1,1,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
    [1,1,0,0,0,1,1],
  ],
};

const COLS = 7;
const ROWS = 9;
const LETTER_GAP = 2;
const REPEL_R = 130;
const REPEL_F = 0.06;
const BG_COUNT = 100;

interface Particle {
  x: number; y: number;
  bx: number; by: number;
  vx: number; vy: number;
  r: number; a: number; ad: number;
  isText: boolean;
  /** index in the text sequence, used for wave motion */
  idx: number;
}

function wordParticles(word: string, w: number, h: number, dotR: number, gap: number, isRight: boolean) {
  const totalRows = word.length * ROWS + (word.length - 1) * LETTER_GAP;
  const totalHeight = totalRows * gap;
  const startY = (h - totalHeight) / 2;
  const startX = isRight ? w - (COLS * gap + dotR * 4) : dotR * 4;

  const points: { x: number; y: number }[] = [];
  for (let li = 0; li < word.length; li++) {
    const letter = FONT[word[li]];
    if (!letter) continue;
    const letterOffsetY = li * (ROWS + LETTER_GAP) * gap;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (letter[row][col]) {
          points.push({
            x: startX + col * gap,
            y: startY + letterOffsetY + row * gap,
          });
        }
      }
    }
  }
  return points;
}

function bgParticles(w: number, h: number) {
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < BG_COUNT; i++) {
    pts.push({ x: Math.random() * w, y: Math.random() * h });
  }
  return pts;
}

function spawn(w: number, h: number): Particle[] {
  const base = Math.min(w, h);
  const totalRows = 5 * ROWS + (5 - 1) * LETTER_GAP; // Assuming max 5 letters for Robby/Jhay
  const maxGapForHeight = (h * 0.78) / totalRows;
  const gap = Math.max(5, Math.min(maxGapForHeight, Math.min(13, base * 0.015)));
  const dotR = gap * 0.38;

  const robbyPts = wordParticles("ROBBY", w, h, dotR, gap, false);
  const jhayPts = wordParticles("JHAY", w, h, dotR, gap, true);
  const bgPts = bgParticles(w, h);

  const makeText = (pt: { x: number; y: number }, idx: number): Particle => ({
    x: pt.x + (Math.random() - 0.5) * 300,
    y: pt.y + (Math.random() - 0.5) * 300,
    bx: pt.x, by: pt.y,
    vx: 0, vy: 0,
    r: dotR,
    a: 0.9,
    ad: (Math.random() > 0.5 ? 1 : -1) * (0.001 + Math.random() * 0.002),
    isText: true,
    idx,
  });

  const makeBg = (pt: { x: number; y: number }): Particle => ({
    x: pt.x,
    y: pt.y,
    bx: pt.x, by: pt.y,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r: 1 + Math.random() * 1.8,
    a: 0.15 + Math.random() * 0.35,
    ad: (Math.random() > 0.5 ? 1 : -1) * (0.002 + Math.random() * 0.004),
    isText: false,
    idx: 0,
  });

  return [
    ...robbyPts.map((p, i) => makeText(p, i)),
    ...jhayPts.map((p, i) => makeText(p, i + 1000)), // Offset idx to avoid synchronized wave
    ...bgPts.map((p) => makeBg(p)),
  ];
}

export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const parts = useRef<Particle[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const anim = useRef(0);
  const sz = useRef({ w: 0, h: 0 });

  const resize = useCallback(() => {
    const c = ref.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    const w = c.parentElement?.clientWidth || window.innerWidth;
    const h = c.parentElement?.clientHeight || window.innerHeight;
    sz.current = { w, h };
    c.width = w * dpr;
    c.height = h * dpr;
    c.style.width = `${w}px`;
    c.style.height = `${h}px`;
    const ctx = c.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    parts.current = spawn(w, h);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    const c = ref.current;
    if (!c) return;

    const onMove = (e: MouseEvent) => {
      const r = c.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    const onTouch = (e: TouchEvent) => {
      const r = c.getBoundingClientRect();
      const t = e.touches[0];
      if (t) mouse.current = { x: t.clientX - r.left, y: t.clientY - r.top };
    };

    c.addEventListener("mousemove", onMove);
    c.addEventListener("mouseleave", onLeave);
    c.addEventListener("touchmove", onTouch, { passive: true });
    c.addEventListener("touchend", onLeave);

    const ctx = c.getContext("2d");
    if (!ctx) return;

    let t = 0;                             // global time for wave motion

    const loop = () => {
      const { w, h } = sz.current;
      ctx.clearRect(0, 0, w, h);
      const mx = mouse.current.x, my = mouse.current.y;
      t += 0.02;                            // increment time

      for (const p of parts.current) {
        if (p.isText) {
          // Wave motion: each dot undulates based on its index + time
          const wave = Math.sin(t * 1.5 + p.idx * 0.12) * 1.8;
          const targetX = p.bx + wave;
          const targetY = p.by + Math.cos(t * 1.2 + p.idx * 0.08) * 1.2;

          // Strong spring toward animated base position
          p.vx += (targetX - p.x) * 0.055;
          p.vy += (targetY - p.y) * 0.055;
        } else {
          // Ambient bg drift back to base
          p.vx += (p.bx - p.x) * 0.008;
          p.vy += (p.by - p.y) * 0.008;
        }

        // Mouse repulsion
        const dx = p.x - mx, dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_R && dist > 0) {
          const f = ((REPEL_R - dist) / REPEL_R) * REPEL_F;
          p.vx += (dx / dist) * f * 8;
          p.vy += (dy / dist) * f * 8;
        }

        const jitter = p.isText ? 0.008 : 0.04;
        p.vx += (Math.random() - 0.5) * jitter;
        p.vy += (Math.random() - 0.5) * jitter;
        p.vx *= 0.9; p.vy *= 0.9;
        p.x += p.vx; p.y += p.vy;

        if (!p.isText) {
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }

        // Alpha pulsation
        p.a += p.ad;
        const maxA = p.isText ? 1 : 0.6;
        const minA = p.isText ? 0.75 : 0.15;
        if (p.a > maxA) { p.a = maxA; p.ad *= -1; }
        if (p.a < minA) { p.a = minA; p.ad *= -1; }

        // Draw glow for text dots (bold effect)
        if (p.isText) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(230,184,0,${p.a * 0.15})`;
          ctx.fill();
        }

        // Main dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230,184,0,${p.a})`;
        ctx.fill();
      }
      anim.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(anim.current);
      window.removeEventListener("resize", resize);
      c.removeEventListener("mousemove", onMove);
      c.removeEventListener("mouseleave", onLeave);
      c.removeEventListener("touchmove", onTouch);
      c.removeEventListener("touchend", onLeave);
    };
  }, [resize]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}
