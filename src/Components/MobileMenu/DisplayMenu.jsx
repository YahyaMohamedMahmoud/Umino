import { useEffect, useState } from 'react'

export default function DisplayMenu() {
    const [display, setDisplay] = useState(window.innerWidth <= 600);

    useEffect(() => {
      const onMob = () => {
        setDisplay(window.innerWidth <= 600);
      };
  
      window.addEventListener('load', onMob);
      window.addEventListener('resize', onMob);
  
      return () => {
        window.removeEventListener('load', onMob);
        window.removeEventListener('resize', onMob);
      };
    }, []);
  return display
}
