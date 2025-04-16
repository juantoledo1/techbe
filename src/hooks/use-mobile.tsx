import * as React from "react"

// Define the breakpoint for mobile devices (in pixels).
const MOBILE_BREAKPOINT = 768

// Custom hook to detect if the current screen size is mobile.
export function useIsMobile() {
  // State to store whether the device is mobile.
  // It can be undefined during the initial render.
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create a media query list to check if the screen width is less than the mobile breakpoint.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    // Function to update the isMobile state based on the window width.
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add an event listener to detect changes in the media query list.
    mql.addEventListener("change", onChange)
    
    // Set the initial value of isMobile based on the current window width.
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup function to remove the event listener when the component unmounts.
    return () => mql.removeEventListener("change", onChange)
    // The effect runs only once on mount due to the empty dependency array.
  }, [])

  // Return a boolean indicating whether the device is mobile.
  // Double negation (!!) ensures that the value is a boolean.
  return !!isMobile
}
