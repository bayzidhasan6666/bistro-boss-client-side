import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/HomeCompo/Home/Home';
import Menu from '../Pages/MenuCompo/OurMenu/OurMenu';
import Order from '../Pages/OrderCompo/Order/Order';
import Login from '../Pages/AuthCompo/Login/Login';
import SignUp from '../Pages/AuthCompo/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../Components/Secret';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AddItem from '../Pages/Dashboard/AddItem/AddItem';
import AdminRoute from './AdminRoute';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import Payment from '../Pages/Dashboard/Payment/Payment';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <Menu></Menu>,
      },
      {
        path: 'order/:category',
        element: <Order></Order>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'secret',
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },

      // admin routes--------------

      {
        path: 'allUsers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: 'addItem',
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: 'manageItems',
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
