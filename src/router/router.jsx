import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import NotFound from '../pages/notFound/NotFound';
import Register from '../pages/Register/Register';
import SignIn from '../pages/Signin';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);
export default router;
