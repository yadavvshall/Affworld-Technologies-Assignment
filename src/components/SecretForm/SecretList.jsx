import React from "react";

const SecretList = ({ secrets }) => {
  return (
    <div className="my-4">
      <h2 className="text-5xl font-bold mb-2 bg-red-600">
        Secrets Shared by Others
      </h2>
      <ul>
        {secrets.map((secret, index) => (
          <li key={index} className="p-2 border border-gray-300 rounded mb-2">
            {secret}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecretList;
