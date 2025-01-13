import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import NotFound from '../pages/notFound/NotFound';
import Register from '../pages/Register/Register';
import SignIn from '../pages/Signin';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import JobDetails from '../pages/JobDetails/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from '../pages/jobApply/JobApply';
import MyApplications from '../pages/MyApplications/MyApplications';
import AddJob from '../pages/AddJob/AddJob';

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
        path: '/jobs/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/jobApply/:id',
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: '/myApplications',
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: '/addJob',
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
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
