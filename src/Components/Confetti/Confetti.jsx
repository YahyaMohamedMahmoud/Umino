import React, { useEffect, useState } from 'react'

export default function Confetti() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      return <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={200}/>;
}
