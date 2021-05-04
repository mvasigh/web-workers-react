import React, { useState } from 'react';
import { Title, Bounce, Display, InputForm } from './components';
import { useWorker } from './hooks';
import FibWorker from './lib/fib.worker?worker';

function App() {
  const [result, setResult] = useState();
  const [time, setTime] = useState();
  const [loading, setLoading] = useState(false);
  const worker = useWorker(FibWorker);

  const handleSubmit = (data, e) => {
    if (!worker.mounted) return; // need to check that our worker is ready

    setLoading(true);
    const startTime = performance.now();

    const { atPosition } = data;

    worker
      .call(atPosition)
      .then(result => {
        const endTime = performance.now();
        setTime(() => endTime - startTime); // use the callback setState when doing async
        setResult(() => result);
        setLoading(() => false);
      })
      .catch(err => {
        console.error(err);
        setLoading(() => false);
      });
  };

  return (
    <>
      <Title>
        Horrible Fib in{' '}
        <span role="img" aria-label="React">
          ✨React✨
        </span>
      </Title>
      <Display result={result} time={time} loading={loading} />
      <Bounce />
      <InputForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
