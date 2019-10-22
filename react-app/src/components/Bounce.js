import React, { useRef, useEffect } from 'react';
import createBounce from '../lib/bounce';

function Bounce({ width = 200, height = 300, ...props }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const bounce = createBounce(canvas);
    bounce();
  }, []);

  return <canvas {...props} width={width} height={height} ref={canvasRef} />;
}

export default Bounce;
