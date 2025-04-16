'use client';

import {useEffect, useState} from 'react';
/**
 * Cursor Component: A custom cursor that follows the mouse pointer and changes appearance when the mouse is over the screen.
 */
export function Cursor() {
  // State to manage the cursor's position (x, y)
  const [position, setPosition] = useState({x: 0, y: 0});
  // State to manage the cursor's activity status (true if inside the window, false if outside)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Function to update the cursor position on mouse movement
    const updatePosition = (e: MouseEvent) => {
      // Update the position state with the new mouse coordinates
      setPosition({x: e.clientX, y: e.clientY});
      // Set isActive to true when the mouse is moving
      setIsActive(true);
    };

    // Function to reset isActive to false when the mouse leaves the document
    const resetIsActive = () => {
      setIsActive(false);
    };

    // Add event listeners for mouse movement, mouse leaving, and mouse entering the document
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', resetIsActive);
    document.addEventListener('mouseenter', updatePosition);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', resetIsActive);
      document.removeEventListener('mouseenter', updatePosition);
    };
    // Empty dependency array means this effect runs once after the initial render
  }, []);

  // Render the cursor as a div with dynamic position and styling
  return (
    <div
      className={`cursor ${isActive ? 'comet-tail' : ''}`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        backgroundColor: 'red',
        opacity: isActive ? 1 : 0.8,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 10000,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}


