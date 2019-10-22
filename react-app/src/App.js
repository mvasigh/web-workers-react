import React, { useState } from 'react';
import { Title, Bounce, Display, InputForm } from './components';

function App() {
  const [result, setResult] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (data, e) => {
    // Let's do this in a worker!
    console.log(`Calculating at position ${data.position}...`);
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
