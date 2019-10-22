import React from 'react';
import './Title.css'

function Title({ children, ...props }) {
  return <h1 {...props} className="Title">{children}</h1>;
}

export default Title;
