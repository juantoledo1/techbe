import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * `cn` is a utility function to conditionally apply class names.
 * It merges tailwind class names together with clsx
 *
 * @param {ClassValue[]} inputs - An array of class names.
 *
 * @returns {string} - The merged class name string.
 *
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
