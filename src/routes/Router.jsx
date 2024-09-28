import * as React from "react";
import {
  createHashRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Home";
import About from "../About";
import Ourservices from "../Ourservices";
import Projects from "./Projects";
import Contact from "../Contact";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",// This makes the Home component render at the root path
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
      {
        path: "contact",
        element: <Contact/>,
      },
    ],
  },
]);

export default router;
