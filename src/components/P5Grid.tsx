
import React from 'react';
import Sketch from 'react-p5';
import type p5Types from 'p5';

interface P5GridProps {
  className?: string;
}

const P5Grid: React.FC<P5GridProps> = ({ className }) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.clear();
    
    // Grid settings
    const gridSize = 40;
    const dotSize = 1;
    
    // Set the color with low opacity for subtlety
    p5.stroke(255, 255, 255, 20);
    p5.strokeWeight(dotSize);
    
    // Draw horizontal lines
    for (let y = 0; y < p5.height; y += gridSize) {
      for (let x = 0; x < p5.width; x += 4) {
        // Create wave effect
        const waveOffset = p5.sin(x * 0.01 + p5.frameCount * 0.01) * 3;
        p5.point(x, y + waveOffset);
      }
    }
    
    // Draw vertical lines
    for (let x = 0; x < p5.width; x += gridSize) {
      for (let y = 0; y < p5.height; y += 4) {
        // Create wave effect
        const waveOffset = p5.sin(y * 0.01 + p5.frameCount * 0.01) * 3;
        p5.point(x + waveOffset, y);
      }
    }
    
    // Add subtle dots at intersections
    for (let x = 0; x < p5.width; x += gridSize) {
      for (let y = 0; y < p5.height; y += gridSize) {
        p5.stroke(255, 255, 255, 30);
        p5.strokeWeight(dotSize * 1.5);
        p5.point(x, y);
      }
    }
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default P5Grid;
