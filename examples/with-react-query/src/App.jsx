import React from 'react';
import marked from 'marked';

import './App.css';

const Editor = ({ onChange }) => {
  return <textarea className="editor" onChange={onChange} />;
};

const Preview = ({ html }) => {
  return (
    <div className="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};

const App = () => {
  const [markdown, setMarkdown] = React.useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <Editor value={markdown} onChange={handleChange} />
      <Preview html={marked(markdown)} />
    </div>
  );
};

export default App;
