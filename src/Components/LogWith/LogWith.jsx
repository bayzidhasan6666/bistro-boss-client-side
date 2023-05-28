import React from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

const LogWith = () => {
  return (
    <>
      {' '}
     
      <div className="flex items-center justify-center space-x-4">
        <button className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full">
          <FaFacebook size={20} />
        </button>
        <button className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full">
          <FaGoogle size={20} />
        </button>
        <button className="text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-full">
          <FaGithub size={20} />
        </button>
      </div>
    </>
  );
};

export default LogWith;
