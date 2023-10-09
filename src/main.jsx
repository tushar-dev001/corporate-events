import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home/Home.jsx";
import RootLayOut from "./pages/RootLayOut/RootLayOut.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import OurEvents from "./pages/OurEvents/OurEvents";
import Category from "./pages/Category/Category";
import AuthProvider from "./provider/AuthProvider";
import PrivateRouter from "./Router/PrivateRouter";
import Celebration from "./pages/Celebration/Celebration";
import News from "./pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "category",
        element: (
          <PrivateRouter>
            <Category></Category>
          </PrivateRouter>
        ),
      },
      {
        path: "celebration",
        element: (
          <PrivateRouter>
            {" "}
            <Celebration></Celebration>
          </PrivateRouter>
        ),
      },
      {
        path: "events",
        element: <OurEvents></OurEvents>,
      },
      {
        path: "/news/:newsId",
        loader: () => fetch("/category.json"),
        element: (
          <PrivateRouter>
            <News></News>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
