import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="loader flex w-fit mt-28 mx-auto">
        <BarLoader className='bg-teal-500' loading={loading} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={`/login`} state={{ from: location }} replace />;
};

export default PrivateRoute;
