import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Pages/SharedCompo/Footer/Footer';
import Navbar from './Pages/SharedCompo/Navbar/Navbar';

const App = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes('login') || location.pathname.includes('signUp');

  return (
    <div className="flex flex-col min-h-screen">
      {noHeaderFooter || <Navbar></Navbar>}
      <div className="flex-grow">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default App;
