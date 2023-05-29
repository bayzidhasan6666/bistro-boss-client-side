import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import ActiveLink from '../../../Components/ActiveLink/ActiveLink';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleSignOut = () => {
    signOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar max-w-screen-xl fixed z-50 bg-[#151515] text-white bg-opacity-40 border">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#151515]bg-opacity-50 border rounded-box w-52"
            >
              <li>
                <ActiveLink to={`/`}>Home</ActiveLink>
              </li>
              <li tabIndex={0}>
                <ActiveLink className="justify-between" to={`/menu`}>
                  Our Menu
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to={`/order/dessert`}>Food Order</ActiveLink>
              </li>
            </ul>
          </div>
          <div>
            {' '}
            <Link className="text-white font-serif uppercase text-lg">
              Bistro Boss
            </Link>
            <p className="uppercase text-sm font-serif">Restaurant</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            <li>
              <ActiveLink to={`/`}>Home</ActiveLink>
            </li>
            <li tabIndex={0}>
              <ActiveLink to={`/menu`}>Our Menu</ActiveLink>
            </li>
            <li>
              <ActiveLink to={`/order/dessert`}>Food Order</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/dashboard/myCart'} className="mr-3">
            <div className="badge text-white bg-transparent border-none ">
              <FaShoppingCart className="w-8 h-5"></FaShoppingCart>
              <span className="badge">+{cart?.length || 0}</span>
            </div>
          </Link>
          {user ? (
            <div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      title={
                        user.displayName ? user.displayName : 'No Name Found'
                      }
                      src={
                        user.photoURL
                          ? user.photoURL
                          : 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1046565782.1676251229&semt=ais'
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box"
                >
                  <li>
                    <ActiveLink className="justify-between">Profile</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink>Settings</ActiveLink>
                  </li>
                  <li>
                    <Link onClick={handleSignOut}>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link
                to={`/login`}
                className="btn btn-outline border border-white text-white rounded-none capitalize"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
