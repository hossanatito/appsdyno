
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
    
    // Calculate fade edges (20% from each side)
    const fadeStart = p5.width * 0.1;
    const fadeEnd = p5.width * 0.9;
    const fadeStartY = p5.height * 0.1;
    const fadeEndY = p5.height * 0.9;
    
    // Draw horizontal lines with fade effect
    for (let y = 0; y < p5.height; y += gridSize) {
      for (let x = 0; x < p5.width; x += 2) {
        // Calculate opacity based on position
        let opacity = 50;
        
        if (x < fadeStart) {
          opacity = p5.map(x, 0, fadeStart, 0, 50);
        } else if (x > fadeEnd) {
          opacity = p5.map(x, fadeEnd, p5.width, 50, 0);
        }
        
        if (y < fadeStartY) {
          opacity *= p5.map(y, 0, fadeStartY, 0, 1);
        } else if (y > fadeEndY) {
          opacity *= p5.map(y, fadeEndY, p5.height, 1, 0);
        }
        
        p5.stroke(255, 255, 255, opacity);
        p5.strokeWeight(lineWeight);
        
        // Draw small segments instead of full lines for better fade effect
        if (x % gridSize === 0) {
          p5.line(x, y, x + 2, y);
        }
      }
    }
    
    // Draw vertical lines with fade effect
    for (let x = 0; x < p5.width; x += gridSize) {
      for (let y = 0; y < p5.height; y += 2) {
        // Calculate opacity based on position
        let opacity = 50;
        
        if (x < fadeStart) {
          opacity = p5.map(x, 0, fadeStart, 0, 50);
        } else if (x > fadeEnd) {
          opacity = p5.map(x, fadeEnd, p5.width, 50, 0);
        }
        
        if (y < fadeStartY) {
          opacity *= p5.map(y, 0, fadeStartY, 0, 1);
        } else if (y > fadeEndY) {
          opacity *= p5.map(y, fadeEndY, p5.height, 1, 0);
        }
        
        p5.stroke(255, 255, 255, opacity);
        p5.strokeWeight(lineWeight);
        
        // Draw small segments instead of full lines
        if (y % gridSize === 0) {
          p5.line(x, y, x, y + 2);
        }
      }
    }
    
    // Add dots at intersections with fading effect
    for (let x = 0; x < p5.width; x += gridSize) {
      for (let y = 0; y < p5.height; y += gridSize) {
        // Calculate opacity based on position
        let opacity = 70;
        
        if (x < fadeStart) {
          opacity = p5.map(x, 0, fadeStart, 0, 70);
        } else if (x > fadeEnd) {
          opacity = p5.map(x, fadeEnd, p5.width, 70, 0);
        }
        
        if (y < fadeStartY) {
          opacity *= p5.map(y, 0, fadeStartY, 0, 1);
        } else if (y > fadeEndY) {
          opacity *= p5.map(y, fadeEndY, p5.height, 1, 0);
        }
        
        p5.stroke(255, 255, 255, opacity);
        p5.strokeWeight(3);
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
