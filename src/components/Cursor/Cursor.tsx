'use client';

import {useEffect, useState} from 'react';

export function Cursor() {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({x: e.clientX, y: e.clientY});
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  );
}
