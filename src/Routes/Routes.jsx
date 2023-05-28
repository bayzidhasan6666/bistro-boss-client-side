import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/HomeCompo/Home/Home';
import Menu from '../Pages/MenuCompo/OurMenu/OurMenu';
import Order from '../Pages/OrderCompo/Order/Order';
import Login from '../Pages/AuthCompo/Login/Login';
import SignUp from '../Pages/AuthCompo/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../Components/Secret';
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
]);
export default router;
