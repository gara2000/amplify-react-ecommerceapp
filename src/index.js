import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/reset.css';

import Nav from './components/paritals/Nav';
import Profile from './components/pages/Profile';
import Admin from './components/pages/Profile';
import Main from './components/pages/Profile';
import ErrorPage from './error-page';

import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
Amplify.configure(config);

const router = createBrowserRouter([{
  path: "/",
  element: <Nav />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/admin",
      element: <Admin />
    },
    {
      path: "/profile",
      element: <Profile />
    }
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);