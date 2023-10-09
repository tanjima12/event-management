import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Component/Home/Home";
import LogIn from "./Component/LogIn/LogIn";
import Register from "./Component/Register/Register";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import Details from "./Component/Details/details";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Services from "./Component/SerVices/Services";
import Appotment from "./Component/Appoitment/Appotment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/events.json"),
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/appoitment",
        element: (
          <PrivateRoute>
            {" "}
            <Appotment></Appotment>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
