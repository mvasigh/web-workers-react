import createBounce from './bounce';
import asyncFib from './asyncFib';

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

  asyncFib(value)
    .then(result => {
      const endTime = performance.now();
      const time = (endTime - startTime).toFixed(2);
      display.textContent = `Done! Result: ${result}, Time: ${time} ms`;
      input.value = '';
    })
    .catch(e => console.error(e));
});

bounce();
