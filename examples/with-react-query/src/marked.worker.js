import marked from 'marked';

function handleMessage(e) {
  const { timestamp, markdown } = e.data;
  self.postMessage({
    timestamp,
    html: marked(markdown),
  });
}

self.addEventListener('message', handleMessage);
