import React, { useState } from 'react';
import './InputForm.css';

function InputForm({ onSubmit }) {
  const [position, setPosition] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ atPosition: Number(position) }, e);
    setPosition('');
  };

  const handleChange = e => {
    setPosition(e.target.value);
  };

  return (
    <form className="InputForm" onSubmit={handleSubmit}>
      <input
        type="number"
        min="0"
        step="1"
        placeholder="Enter a position"
        value={position}
        onChange={handleChange}
        required
      />
      <button>Calculate</button>
    </form>
  );
}

export default InputForm;
