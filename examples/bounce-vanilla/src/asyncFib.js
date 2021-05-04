import FibWorker from './fib.worker?worker'

function asyncFib(data) {
  // Create a Web Worker
  const fibWorker = new FibWorker();

  // Return a Promise that resolves to the value returned from Worker
  return new Promise((resolve, reject) => {
    // Handle the message event from the worker
    const handleMessage = event => {
      const result = event.data; // needs to go back to the consumer
      resolve(result);
      fibWorker.removeEventListener('message', handleMessage);
      fibWorker.terminate();
    };

    // Handle any errors from the worker
    const handleError = error => {
      reject(error);
      fibWorker.removeEventListener('error', handleError);
      fibWorker.terminate();
    };

    // Mount listeners
    fibWorker.addEventListener('message', handleMessage);
    fibWorker.addEventListener('error', handleError);

    // Send the data to the worker via postMessage
    fibWorker.postMessage(data);
  });
}

export default asyncFib;
