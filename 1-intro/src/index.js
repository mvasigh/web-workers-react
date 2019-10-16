import bounce from './bounce';
import fib from './fib';

const form = document.getElementById('input-form');
const input = document.getElementById('input');
const display = document.getElementById('display');

form.addEventListener('submit', e => {
  e.preventDefault();
  display.textContent = 'Calculating...';
  const value = input.valueAsNumber;
  const startTime = performance.now();

  // Do the thing!
  const result = fib(value);

  const endTime = performance.now();
  const time = (endTime - startTime).toFixed(2)
  display.textContent = `Done! Result: ${result}, Time: ${time} ms`;
});

bounce();
