'use client';

import {useEffect, useState} from 'react';

export function Cursor() {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({x: e.clientX, y: e.clientY});
      setIsActive(true);
    };

    const resetIsActive = () => {
      setIsActive(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', resetIsActive);
    document.addEventListener('mouseenter', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', resetIsActive);
      document.removeEventListener('mouseenter', updatePosition);
    };
  }, []);

  return (
    <div
      className={`cursor ${isActive ? 'comet-tail' : ''}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  );
}
