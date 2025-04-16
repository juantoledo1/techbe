'use client';

/**
 * Footer component for the website.
 * Displays copyright information and contact details.
 */
export function Footer() {
  return (
    // Footer container with background color, text color, padding, and text alignment.
    <footer className="bg-secondary text-foreground p-4 text-center">
      {/* Copyright notice */}
      <p>© 2025 Betelgeuse Tech. All rights reserved.</p>
      {/* Contact email */}
      <p>Contact: info@betelgeusetech.com</p>
    </footer>
  );
}

