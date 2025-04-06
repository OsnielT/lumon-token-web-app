import { useEffect, useRef, useState } from 'react';

const NUM_ROWS = 16;
const NUM_COLS = 32;
const CELL_SIZE = 26; // Base size of each cell
const JITTER_AMOUNT = 2; // Pixel movement for shakiness
const SCALE_FACTOR = 1.8; // Scale up or down by this factor
const CURSOR_SPEED = 100; // Speed of the "cursor" effect in ms
const SCALE_RADIUS = 3; // Defines how many numbers around the cursor will be affected

// Generate static random numbers
const generateStaticNumbers = () => {
  let grid = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    let row = [];
    for (let j = 0; j < NUM_COLS; j++) {
      row.push(Math.floor(Math.random() * 10));
    }
    grid.push(row);
  }
  return grid;
};

export default function MDRCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const numbers = generateStaticNumbers(); // Generate static numbers once
  const [cursorPos, setCursorPos] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Add null check

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Add null check for context

    // Apply CRT monitor effect styles
    canvas.style.filter = 'contrast(120%) brightness(80%)';
    canvas.style.borderRadius = '10px';

    const drawNumbers = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#51ceff'; // Lumon Blue-Green color
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
          const num = numbers[row][col];

          // Apply slight jitter effect for shakiness
          const jitterX = (Math.random() - 0.5) * JITTER_AMOUNT;
          const jitterY = (Math.random() - 0.5) * JITTER_AMOUNT;

          // Scale numbers based on distance from cursor position
          const distance = Math.sqrt(
            Math.pow(row - cursorPos.row, 2) + Math.pow(col - cursorPos.col, 2)
          );
          let fontSize = 18;
          if (distance < SCALE_RADIUS) {
            const scale =
              1 + (SCALE_FACTOR - 1) * (1 - distance / SCALE_RADIUS);
            fontSize *= scale;
          }

          ctx.font = `${fontSize}px Michroma, monospace`;
          ctx.fillText(
            num.toString(),
            col * CELL_SIZE + 12 + jitterX,
            row * CELL_SIZE + 12 + jitterY
          );
        }
      }
    };

    drawNumbers();
    const interval = setInterval(drawNumbers, CURSOR_SPEED); // Refresh every few ms for smooth motion

    return () => clearInterval(interval);
  }, [cursorPos]);

  // Move the "cursor" across the screen smoothly
  useEffect(() => {
    let row = 0;
    let col = 0;
    let direction = 1; // 1 for right, -1 for left

    const cursorInterval = setInterval(() => {
      setCursorPos({ row, col });

      col += direction;
      if (col >= NUM_COLS || col < 0) {
        direction *= -1; // Change direction at edges
        row = (row + 1) % NUM_ROWS; // Move down one row
      }
    }, CURSOR_SPEED);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center bg-black p-6">
      {/* CRT Overlay Effect */}
      <div className="absolute w-full h-full top-0 left-0 opacity-10 pointer-events-none crt-scanlines"></div>

      {/* Canvas for Numbers */}
      <canvas
        ref={canvasRef}
        width={NUM_COLS * CELL_SIZE}
        height={NUM_ROWS * CELL_SIZE}
        className="opacity-90 crt-glow"
      ></canvas>

      {/* Extra Glow Layer */}
      <div className="absolute w-full h-full top-0 left-0 opacity-10 pointer-events-none crt-glow-effect"></div>
    </div>
  );
}
