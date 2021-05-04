import React from 'react';

function Display({ result = null, time = null, loading = false, ...props }) {
  let displayOutput = `Result: ${result}, time: ${time && time.toFixed(2)} ms`;

  return (
    <p className="Display-result">
      {loading
        ? 'Calculating...'
        : time && result
        ? `Done! ${displayOutput}`
        : ''}
    </p>
  );
}

export default Display;
