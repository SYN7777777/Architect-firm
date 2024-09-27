import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Home";
import About from "../About";
import Ourservices from "../Ourservices";
import Projects from "./Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes the Home component render at the root path
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Ourservices />,
      },
      {
        path: "projects",
        element: <Projects/>,
      },
    ],
  },
]);

export default router;
