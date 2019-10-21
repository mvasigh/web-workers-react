import React from 'react';
import { Title, Bounce, Display, InputForm } from './components';

function App() {
  const handleSubmit = (data, e) => {
    // Let's do this in a worker!
    console.log(`Calculating at position ${data.position}...`);
  };

  return (
    <>
      <Title>Horrible Fib in ✨React✨</Title>
      <Display />
      <Bounce />
      <InputForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
