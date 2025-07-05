import { useState } from 'react';
import './App.css';

function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form is submitted: " + name);
  };

  const chang = (e) => {
    setName(e.target.value); // ✅ Update state when input changes
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={chang}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
