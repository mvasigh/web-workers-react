import React from 'react';
import { useQuery } from 'react-query';
import MarkedWorker from './marked.worker?worker';

import './App.css';

const worker = new MarkedWorker();

function renderMarkdownToHtml(markdown) {
  return new Promise((resolve, reject) => {
    const _timestamp = Date.now();

    function handleMessage(e) {
      const { timestamp, html } = e.data;

      if (timestamp === _timestamp) {
        worker.removeEventListener('message', handleMessage);
        resolve(html);
      }
    }

    worker.addEventListener('message', handleMessage);
    worker.postMessage({
      timestamp: _timestamp,
      markdown,
    });
  });
}

const Editor = ({ onChange }) => {
  return <textarea className="editor" onChange={onChange} />;
};

const Preview = ({ html }) => {
  const lastHtmlRef = React.useRef('');

  if (html) {
    lastHtmlRef.current = html;
  }

  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: lastHtmlRef.current }}
    />
  );
};

const App = () => {
  const [markdown, setMarkdown] = React.useState('');
  const { data } = useQuery(['markdown', markdown], () =>
    renderMarkdownToHtml(markdown)
  );

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <Editor value={markdown} onChange={handleChange} />
      <Preview html={data ?? ''} />
    </div>
  );
};

export default App;
