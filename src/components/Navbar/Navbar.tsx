'use client';

import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export function Navbar() {
  return (
    <nav className="bg-secondary p-4 text-foreground sticky top-0 z-10">
      <ul className="flex space-x-4 justify-center">
        <li><a href="#about" className="hover:text-accent">Sobre Nosotros</a></li>
        <li><a href="#products" className="hover:text-accent">Productos</a></li>
        <li><a href="#what-we-do" className="hover:text-accent">Qué Hacemos</a></li>
      </ul>
    </nav>
  );
}
