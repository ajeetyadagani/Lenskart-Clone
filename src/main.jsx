import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Eyeglass from "./pages/Eyeglass.jsx";
import Sunglass from "./pages/Sunglass.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/eyeglass",
    element: <Eyeglass />,
  },
  {
    path: "/sunglass",
    element: <Sunglass />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);