import React, { useState } from 'react';

const SecretForm = ({ onAddSecret }) => {
  const [secret, setSecret] = useState('');

  const handleInputChange = (e) => {
    setSecret(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSecret(secret);
    setSecret(''); 
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Share your secret..."
          value={secret}
          onChange={handleInputChange}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Share Secret
        </button>
      </form>
    </div>
  );
};

export default SecretForm;
