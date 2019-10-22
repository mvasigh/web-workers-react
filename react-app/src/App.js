import React, { useState } from 'react';
import { Title, Bounce, Display, InputForm } from './components';
import fib from './lib/fib';

function App() {
  const [result, setResult] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (data, e) => {
    const startTime = performance.now();

    // ! This code is blocking! 🚨 Fix it with a Web Worker
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
