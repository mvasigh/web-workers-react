import React from 'react';

function Display({ result = null, time = null, ...props }) {

  return (
    <>
      <p className="Display-result">{result}</p>
      <p className="Display-time">{time && `${time.toFixed(2)} ms`}</p>
    </>
  );
}

export default Display
