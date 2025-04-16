"use client";

export function Navbar() {
  return (
    // Main navigation bar container
    <nav className="bg-secondary p-4 text-foreground sticky top-0 z-10"> 
      {/* Unordered list to contain the navigation links */}
      <ul className="flex space-x-4 justify-center">
        {/* Navigation link to the 'About Us' section */}
        <li>
          <a href="#about" className="hover:text-accent">About Us</a>
        </li>
        {/* Navigation link to the 'Products' section */}
        <li>
          <a href="#products" className="hover:text-accent">Products</a>
        </li>
        {/* Navigation link to the 'What We Do' section */}
        <li>
          <a href="#what-we-do" className="hover:text-accent">What We Do</a>
        </li>
      </ul>
    </nav>
  );
}

