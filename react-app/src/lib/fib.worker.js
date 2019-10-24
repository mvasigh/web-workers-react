import fib from './fib';

function handleMessage(event) {
  // event.data will have our message
  const position = event.data;
  const result = fib(position);

  self.postMessage(result);
}

self.addEventListener('message', handleMessage);
