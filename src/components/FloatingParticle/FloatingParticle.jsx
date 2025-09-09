import React from "react";

const FloatingParticle = ({ count = 40 }) => {
  const particle = Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 2 + 2,
    // delay:Math.random()*2,
    // direction:Math.random()*2*Math.PI,
    // color:Math.random()*360,
    // opacity:Math.random()*0.5+0.5,
    // rotation:Math.random()*360,
    // scale:Math.random()*0.5+0.5,
    // animation:Math.random()*2+1,
    // animationDuration:Math.random()*2+1,
    // animationDelay:Math.random()*2,
    // animationDirection:Math.random()*2,
    // animationFillMode:Math.random()*2,
    // animationIterationCount:Math.random()*2,
    // animationIterationDirection:Math.random()*2,
    // animationIterationDelay:Math.random()*2,
    // animationIterationDirection:Math.random()*2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particle.map((p, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full "
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animation: `float ${p.duration}s infinite`,
            }}
          ></div>
      ))}
    </div>
  );
};

export default FloatingParticle;
