import PingWorker from './ping.worker?worker';

const worker = new PingWorker();
const button = document.getElementById('ping');
const display = document.getElementById('response');

function handleClick() {
  worker.postMessage('ping');
}

function handleMessage(e) {
  console.log('Response message received by main thread!');
  display.innerHTML = e.data + ' ' + new Date();
}

button.addEventListener('click', handleClick);
worker.addEventListener('message', handleMessage);
