import createBounce from './bounce';

// * This is a Parcel-only way of using Web Workers!
const fibWorker = new Worker('./fib.worker.js');

const form = document.getElementById('input-form');
const input = document.getElementById('input');
const display = document.getElementById('display');
const canvas = document.getElementById('canvas');

const bounce = createBounce(canvas);

form.addEventListener('submit', e => {
  e.preventDefault();
  display.textContent = 'Calculating...';
  const value = input.valueAsNumber;
  const startTime = performance.now();

  const handleMessage = event => {
    // event.data will have our result
    const result = event.data;

    const endTime = performance.now();
    const time = (endTime - startTime).toFixed(2);
    display.textContent = `Done! Result: ${result}, Time: ${time} ms`;
    input.value = '';

    fibWorker.removeEventListener('message', handleMessage);
  };

  fibWorker.addEventListener('message', handleMessage);
  fibWorker.postMessage(value);
});

bounce();
