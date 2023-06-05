import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(9,user);
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log('isAdmin',isAdmin);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="loader flex w-fit mt-28 mx-auto">
        <BarLoader className="bg-teal-500" />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
