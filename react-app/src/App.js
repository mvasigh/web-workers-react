import React, { useState } from 'react';
import { Title, Bounce, Display, InputForm } from './components';
import fib from './lib/fib';

function App() {
  const [result, setResult] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (data, e) => {
    // Let's do this in a worker!
    const startTime = performance.now();

    const { atPosition } = data;
    const result = fib(atPosition);

    const endTime = performance.now();
    setTime(endTime - startTime);
    setResult(result);
  };

  return (
    <>
      <Title>
        Horrible Fib in{' '}
        <span role="img" aria-label="React">
          ✨React✨
        </span>
      </Title>
      <Display result={result} time={time} />
      <Bounce />
      <InputForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
