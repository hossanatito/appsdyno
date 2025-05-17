
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
    const lineWeight = 1;
    
    // Set the color with appropriate opacity for visibility
    p5.stroke(255, 255, 255, 50);
    p5.strokeWeight(lineWeight);
    
    // Draw horizontal lines
    for (let y = 0; y < p5.height; y += gridSize) {
      p5.line(0, y, p5.width, y);
    }
    
    // Draw vertical lines
    for (let x = 0; x < p5.width; x += gridSize) {
      p5.line(x, 0, x, p5.height);
    }
    
    // Add slightly larger dots at intersections
    p5.stroke(255, 255, 255, 70);
    p5.strokeWeight(3);
    
    for (let x = 0; x < p5.width; x += gridSize) {
      for (let y = 0; y < p5.height; y += gridSize) {
        p5.point(x, y);
      }
    }
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className={`absolute inset-0 z-10 ${className}`}>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default P5Grid;
