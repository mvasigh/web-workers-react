function handleMessage(e) {
  console.log('Message received by worker!')

  if (e.data === 'ping') {
    self.postMessage('Pong!');
  }
}

self.addEventListener('message', handleMessage);