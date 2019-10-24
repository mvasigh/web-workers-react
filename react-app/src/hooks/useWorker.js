import { useRef, useEffect, useState } from 'react';

function useWorker(WorkerConstructor) {
  // * Need to use a ref to keep a persistent reference to Worker instance
  const workerRef = useRef();
  // * Need to let the consumer of Hook know if the Worker is available
  const [mounted, setMounted] = useState(false);

  // * Now, we need to mount the worker in a useEffect
  useEffect(() => {
    // Instantiate worker and set mounted state to true
    const worker = new WorkerConstructor();
    workerRef.current = worker;
    setMounted(true);

    return () => {
      // Clean up worker when component unmounts or Worker changes
      worker.terminate();
    };
  }, [WorkerConstructor]);

  // * Let's give the consumer an easy way to call the worker
  const call = payload => {
    // Grab the Worker instance
    const worker = workerRef.current;

    // Return a Promise that resolves to worker response or rejects with error
    return new Promise((resolve, reject) => {
      // Handle the message event, clean up and resolve the promise
      const handleMessage = event => {
        const result = event.data;
        worker.removeEventListener('message', handleMessage);
        worker.removeEventListener('error', handleError);
        resolve(result);
      };

      // Handle the error event and clean up
      const handleError = error => {
        worker.removeEventListener('message', handleMessage);
        worker.removeEventListener('error', handleError);
        reject(error);
      };

      // Mount our event listeners
      worker.addEventListener('message', handleMessage);
      worker.addEventListener('error', handleError);

      // Finally, post the message
      worker.postMessage(payload);
    });
  };

  return {
    mounted,
    worker: workerRef.current,
    call
  };
}

export default useWorker;
